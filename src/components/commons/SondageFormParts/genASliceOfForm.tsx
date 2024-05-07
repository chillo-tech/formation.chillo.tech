import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Question } from "@/types";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import CustomSelect from "../customSelect";
import { UseMutationResult } from "react-query";

const genASliceOfForm = ({ slice }: { slice: Question[] }) => {
  const Page = <V extends FieldValues>({
    form,
    mutation,
  }: {
    form: UseFormReturn<V, any, undefined>;
    mutation: UseMutationResult<any, unknown, V, unknown>;
    key?: string;
  }) => {
    return (
      <fieldset className="space-y-4">
        {slice.map((question, index) => {
          // type 1 reponse unique
          // type 2 reponse multiple
          // type 3 reponse ouverte
          if (question.type === "1" || question.type === "2") {
            return (
              <CustomSelect
                key={`Question-select-${index}`}
                question={question}
                form={form}
                type={question.type}
              />
            );
          } else {
            return (
              <FormField
                key={`Question-text-${index}`}
                control={form.control}
                name={`question_${question.id}` as Path<V>}
                render={({ field }) => (
                  <FormItem
                    id={`question_${question.id}-form-item`}
                    key={`Question-text-${index}-fI-${field.name}`}
                  >
                    <FormLabel className="text-lg text-heading">
                      {question.question}
                    </FormLabel>
                    <FormControl
                      key={`Question-text-${index}-fc`}
                      id={`question_${question.id}-form-item`}
                    >
                      <Input
                        key={`Question-text-${index}-fi-${question.question}`}
                        id={`question_${question.id}-form-input`}
                        type={"text"}
                        placeholder=""
                        {...field}
                        disabled={mutation.isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          }
        })}
      </fieldset>
    );
  };
  return Page;
};

export default genASliceOfForm;
