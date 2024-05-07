import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import classNames from "classnames";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import fr from "react-phone-input-2/lang/fr.json";
import "react-phone-input-2/lib/style.css";
import { UseMutationResult } from "react-query";

const UserInfoForm = <U, V extends FieldValues>({
  mutation,
  form,
}: {
  mutation: UseMutationResult<any, unknown, U, unknown>;
  form: UseFormReturn<V, any, undefined>;
  key?: string;
}) => {
  return (
    <fieldset>
      <FormField
        control={form.control}
        name={"name" as Path<V>}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg text-heading">
              Votre nom complet
            </FormLabel>
            <FormControl>
              <Input
                type={"text"}
                placeholder=""
                {...field}
                className={`w-full${classNames({
                  "bg-gray-300": mutation.isLoading,
                })}`}
                disabled={mutation.isLoading}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="!mt-3 text-md italic">
        <p>Permettez nous de vous tenir au courant de toute évolution</p>
      </div>

      <FormField
        control={form.control}
        name={"email" as Path<V>}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg text-heading">
              Votre email (Ce champ est optionel)
            </FormLabel>
            <FormControl>
              <Input
                type={"email"}
                placeholder=""
                {...field}
                className={`w-full${classNames({
                  "bg-gray-300": mutation.isLoading,
                })}`}
                disabled={mutation.isLoading}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={"phone" as Path<V>}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg text-heading">
              Votre numéro de téléphone (Ce champ est optionel)
            </FormLabel>
            <FormControl>
              <PhoneInput
                localization={fr}
                country={"fr"}
                onBlur={field.onBlur}
                value={`${field.value?.country_code}${field.value?.local_number}`}
                inputClass={`flex !h-10 !w-full !rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-blue-500 ${classNames(
                  {
                    "bg-gray-300": mutation.isLoading,
                  }
                )}`}
                containerClass="w-full"
                onChange={(value, data, event, formattedValue) => {
                  if (!("dialCode" in data)) return;
                  const customEvent = {
                    ...event,
                    target: {
                      ...event.target,
                      value: {
                        country_code: value ? data.dialCode : "",
                        local_number: value.slice(data.dialCode.length),
                      },
                    },
                  };
                  field.onChange(customEvent);
                }}
                disabled={mutation.isLoading}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </fieldset>
  );
};

export default UserInfoForm;
