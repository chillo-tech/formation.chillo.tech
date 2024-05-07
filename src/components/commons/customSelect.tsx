import React from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Question } from "@/types";

// type 1 : unique choice
// type 2 multiple choices
const CustomSelect = <V extends FieldValues>({
  type,
  form,
  question,
}: {
  type: "1" | "2";
  form: UseFormReturn<V, any, undefined>;
  question: Question;
}) => {
  const isMultipleChoice = type === "2";
  const choices = question.choix.map((choix) => ({
    value: choix.id,
    label: choix.option,
  }));
  return (
    <div>
      <p className="">{question.question}</p>

      <div className="space-y-2">
        {choices.map((choice, index) => {
          return (
            <FormField
              key={`${choice.label}-${index}`}
              control={form.control}
              name={`question_${question.id}` as Path<V>}
              render={({ field }) => (
                <FormItem>
                  {index === 0 && <FormMessage />}
                  <div className="flex gap-2 items-center">
                    <FormControl className="w-[17px] h-[17px]">
                      <Input
                        type={isMultipleChoice ? "checkbox" : "radio"}
                        {...field}
                        value={choice.value}
                        checked={
                          isMultipleChoice
                            ? Array.isArray(field.value) &&
                              field.value.includes(choice.value)
                            : field.value === choice.value
                        }
                        onChange={(e) => {
                          if (isMultipleChoice) {
                            const selectedValues = Array.isArray(field.value)
                              ? field.value.includes(choice.value)
                                ? field.value.filter(
                                    (val: any) => val !== choice.value
                                  )
                                : [...field.value, choice.value]
                              : [choice.value];
                            field.onChange({
                              ...e,
                              target: { ...e.target, value: selectedValues },
                            });
                          } else {
                            field.onChange({
                              ...e,
                              target: { ...e.target, value: choice.value },
                            });
                          }
                        }}
                      />
                    </FormControl>
                    <FormLabel className="cursor-pointer select-none">
                      {choice.label}
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CustomSelect;
