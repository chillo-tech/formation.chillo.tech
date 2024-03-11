import { title1, title2 } from "@/assets/fonts";
import { HomeLayout } from "@/components";
import ContactForm from "@/components/commons/ContactForm";
import { cn } from "@/lib/utils";
import Head from "next/head";

function ContactPage() {
  return (
    <HomeLayout>
      <Head>
        <title> Contactez-nous | Formations Chillo </title>
      </Head>
      <section className="p-5 py-12 px-1 sm:px-10 md:px-24 lg:px-48 xl:px-56 flex flex-col space-y-10">
        <div className="space-y-4 flex flex-col items-center justify-between">
          <h1
            className={cn(
              "text-4xl w-fit mx-auto lg:text-5xl font-bold text-center text-heading !font-heading fontF-heading"
            )}
          >
            Contactez-nous
          </h1>
          <p
            className={cn(
              "text-center text-xl w-fit mx-auto text-heading !font-heading fontF-heading"
            )}
          >
            Nous sommes là pour vous.
            <br /> N'hésitez pas à nous contacter pour toute question ou
            préoccupation.
          </p>
        </div>
        <article className="w-fit mx-auto rounded-md border-2 border-gray p-2 md:px-2 md:p-6 bg-white shadow-md">
          <ContactForm />
        </article>
      </section>
    </HomeLayout>
  );
}

export default ContactPage;
