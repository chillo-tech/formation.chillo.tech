"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { siteConfig } from "@/config";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const FormSchema = z
  .object({
    email: z
      .string({
        required_error: "Ce champs est requis.",
      })
      .email("Email invalide"),
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
  })
  .required({
    email: true,
    message: true,
  });

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    try {
      //TODO: mutation.mutate(data);
      toast({
        title: "Success",
        description: "Votre demande à bien été pris en compte.",
      });
    } catch (error) {
      toast({
        title: "Sorry an error occur",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full px-8 mx-auto space-y-6"
        >
          <legend>
            Nous sommes ravis de vous accueillir sur notre page de contact.
            <br /> <br />
            Que vous ayez un projet en tête ou que vous cherchiez des conseils,
            <br />
            notre équipe de développeurs expérimentés est là pour vous
            accompagner.
          </legend>
          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Votre email</FormLabel>
                <FormControl>
                  <Input
                    type={"email"}
                    placeholder=""
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Votre message</FormLabel>
                <FormControl>
                  <Textarea placeholder="" className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"primary"} type="submit">
            Envoyez
          </Button>
          <Separator className="my-6 bg-light-gray" />
          <FormDescription className="text-black/70">
            Merci de considérer nos services pour concrétiser votre vision. |
            <span className="font-semibold text-blue">
              {siteConfig.appName}
            </span>
            .
          </FormDescription>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
