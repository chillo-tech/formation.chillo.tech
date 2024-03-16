"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PulseLoader from "react-spinners/PulseLoader";
import { z } from "zod";

import { siteConfig } from "@/config";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ApplicationContext } from "@/context";
import axios from "axios";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import PhoneInput from "react-phone-input-2";
import fr from "react-phone-input-2/lang/fr.json";
import "react-phone-input-2/lib/style.css";
import { useMutation } from "react-query";
import Message from "../cards/Message";

const FormSchema = z.object({
  email: z.string().email().optional(),
  phone: z
    .object({
      country_code: z.string({
        required_error: "Ce champs est requis.",
      }),
      local_number: z.string({
        required_error: "Ce champs est requis.",
      }),
    })
    .optional(),
  message: z
    .string({
      required_error: "Ce champs est requis.",
    })
    .min(10, {
      message: "Le message doit avoir au moins 10 caractères.",
    })
    .max(255, {
      message: "Le message doit avoir au plus 255 caractères.",
    }),
});

const AttentesForm = () => {
  const {
    state: { actualSession: session },
  } = useContext(ApplicationContext);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const createAttente = async (data: z.infer<typeof FormSchema>) => {
    console.log("data send", {
      email: data.email || "",
      message: data.message,
      phoneNumber: data.phone?.local_number || "",
      phoneIndex: data.phone?.country_code || "",
      sessionId: session?.id || "",
    });
    await axios.post("/api/node/attentes", {
      email: data.email || "",
      message: data.message,
      phoneNumber: data.phone?.local_number || "",
      phoneIndex: data.phone?.country_code || "",
      sessionId: session?.id.toString() || "",
    });
  };

  const mutation = useMutation({
    mutationKey: ["attentes", 1],
    mutationFn: createAttente,
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("data", data);
    mutation.mutate(data);
  };

  const router = useRouter();
  return mutation.isError ? (
    <Message
      action={{
        buttonLabel: "Contactez nous",
        handleFn: () => {
          router.push("/contact-us");
        },
      }}
      message="Un incident vient de survenir. Pas de panique vous pouvez nous contacter en cliquant sur le bouton ci-dessous"
      isError={true}
      title="Oups une erreur est survenue"
    />
  ) : mutation.isSuccess ? (
    <Message
      action={{
        buttonLabel: "Tous nos cours",
        handleFn: () => {
          router.push("/trainings");
        },
      }}
      message="Nous prennons à coeur ce que la communauté pense. C'est pourquoi, vos attentes ne nous laisserons pas indifferents et seront traitées dans les plus brefs delais. D'ici la, vous pouvez à tous moment consulter d'autres cours en cliquant sur le bouton ci-dessous!"
      title="Nous sommes ravis d'avoir recu vos attentes"
      btnClassName="bg-green-300"
    />
  ) : (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full px-3 py-4 sm:px-8 mx-auto space-y-2"
      >
        <legend>{session?.form_view_title}</legend>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Votre message*</FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  className={`resize-none ${classNames({
                    "bg-gray-300": mutation.isLoading,
                  })}`}
                  {...field}
                  disabled={mutation.isLoading}
                  rows={6}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="!mt-6">
          <p>Permettez nous de vous tenir au courant de toute évolution</p>
        </div>

        <FormField
          control={form.control}
          name={"email"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Votre email (Ce champ est optionel)</FormLabel>
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
          name={"phone"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
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

        <Button
          variant={"primary"}
          type="submit"
          className="w-full lg:w-fit !mt-6"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? (
            <div className="flex gap-2 items-end">
              <span>Chargement</span>
              <PulseLoader color="white" size={5} />
            </div>
          ) : (
            "Transmettre"
          )}
        </Button>
        <Separator className="my-6 bg-light-gray" />
        <FormDescription className="text-black/70">
          Merci de considérer nos services pour concrétiser votre vision.
          <span className="font-semibold text-blue"> {siteConfig.appName}</span>
          .
        </FormDescription>
      </form>
    </Form>
  );
};

export default AttentesForm;
