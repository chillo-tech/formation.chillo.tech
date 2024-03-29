"use client";

import { Form, FormDescription } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { siteConfig } from "@/config";

import { ISondage } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import "react-phone-input-2/lib/style.css";
import { useMutation } from "react-query";
import Message from "../cards/Message";
import { Pages, maxFieldPerPage } from "./SondageFormParts";
import FormButtons from "./SondageFormParts/FormButtons";
import axios from "axios";

const FormObjectSchema = {
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
  name: z.string({
    required_error: "Ce champs est requis.",
  }),
};

const SondageForm = ({ sondage }: { sondage: ISondage }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [schema, setSchema] = useState<
    z.ZodObject<
      {
        [x: string]: any;
      },
      "strip",
      z.ZodTypeAny,
      {
        [x: string]: any;
      },
      {
        [x: string]: any;
      }
    >
  >({} as any);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const handleSondage = async (sondage: ISondage) => {
    const objectSchema: any = {};
    sondage.questions.forEach((question) => {
      // type 1 reponse unique
      // type 2 reponse multiple
      // type 3 reponse ouverte
      if (question.type === "1") {
        objectSchema[`question_${question.id}`] = z
          .number({
            required_error: "Ce champ est requis",
          })
          .min(1, "Ce champ est requis");
      } else if (question.type === "2") {
        objectSchema[`question_${question.id}`] = z
          .array(
            z
              .number({ required_error: "Ce champ est requis" })
              .min(1, "Ce champ est requis"),
            { required_error: "Ce champ est requis" }
          )
          .min(1, "Ce champ est requis");
      } else {
        objectSchema[`question_${question.id}`] = z.string({
          required_error: "Ce champ est requis",
        });
      }
    });
    console.log("schemaObject", { ...FormObjectSchema, ...objectSchema });
    setSchema(() => {
      return z.object({ ...FormObjectSchema, ...objectSchema });
    });
  };


  useEffect(() => {
    handleSondage(sondage);
  }, [sondage]);

  const createAnswer = async (data: z.infer<typeof schema>) => {
    const reponses: any[] = [];
    Object.keys(data).forEach((key) => {
      if (key.startsWith("question_")) {
        if (data[key] instanceof String || typeof data[key] === "string") {
          reponses.push({
            valeur: data[key],
            question: parseInt(key.split("question_").at(-1) || ""),
          });
        } else {
          const toAdd =
            data[key] instanceof Number || typeof data[key] === "number"
              ? [
                  {
                    reponses_choisies_id: "+",
                    Option_choix_question_id: {
                      id: data[key],
                    },
                  },
                ]
              : Array.isArray(data[key])
              ? data[key].map((el: any) => ({
                  reponses_choisies_id: "+",
                  Option_choix_question_id: {
                    id: el,
                  },
                }))
              : null;
          reponses.push({
            question: parseInt(key.split("question_").at(-1) || ""),
            choix: {
              create: toAdd,
              update: [],
              delete: [],
            },
          });
        }
      }
    });
    const objToSend = {
      sondage: sondage.id,
      email: data.email,
      nom_et_prenom: data.name,
      reponses,
    };
    console.log("objToSend", objToSend);

    return axios.post("/api/backoffice/resulat_sondage", objToSend);
  };

  const mutation = useMutation({
    mutationKey: ["sondage-form", 1],
    mutationFn: createAnswer,
  });

  const pageIndexByName = useMemo(() => {
    const pageIndex: { [key: string]: number } = {};
    pageIndex.name = 0;
    pageIndex.email = 0;
    pageIndex.phone = 0;
    let pageI = 0;
    for (let i = 0; i < sondage.questions.length; i += maxFieldPerPage) {
      sondage.questions.slice(i, i + maxFieldPerPage).forEach((question) => {
        pageIndex[`question_${question.id}`] = pageI + 1;
      });
      pageI = pageI + 1;
    }
    return pageIndex;
  }, [sondage]);

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log("data", data);
    mutation.mutate(data);
  };

  const onInvalid = (data: z.infer<typeof schema>) => {
    console.log("data errors", data, pageIndexByName);
    setPageIndex(() => {
      const min = Math.min(
        ...Object.keys(data).map((key) => pageIndexByName[key])
      );
      console.log("index min", min);
      return min;
    });
  };

  const pages = useMemo(
    () =>
      Pages(sondage).map((page, index) =>
        page({ form, mutation, key: `form-page-${index}` })
      ),
    [sondage]
  );
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
        onSubmit={form.handleSubmit(onSubmit, onInvalid)}
        className="w-full h-full px-3 py-4 sm:px-8 mx-auto space-y-2 flex flex-col gap-2 justify-between"
      >
        <div>
          <legend>Prennez 5 minutes pour répondre à ce sondage, Merci!</legend>

          {pages.map((page, index) => {
            return (
              <React.Fragment key={`page-form-${index}`}>
                {pageIndex === index && page}
              </React.Fragment>
            );
          })}
        </div>

        <div className="space-y-3">
          <FormButtons
            maxPageCount={pages.length}
            mutation={mutation}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
          />
          <FormDescription className="text-black/70">
            Merci de considérer nos services pour concrétiser votre vision.
            <span className="font-semibold text-blue">
              {" "}
              {siteConfig.appName}
            </span>
            .
          </FormDescription>
        </div>
      </form>
    </Form>
  );
};

export default SondageForm;
