import { ISondage } from "@/types";
import { getHumanDate } from "@/utils";
import Image from "next/image";
import "react-phone-input-2/lib/style.css";
import SondageForm from "../commons/SondageForm";

const SondageMain = ({ sondage }: { sondage: ISondage }) => {
  return (
    <section>
      <div className="lg:flex gap-5 items-center mx-auto px-3 container my-6 space-y-10 lg:space-y-0">
        <header className="w-full text-center lg:text-left lg:w-1/2 space-y-2 lg:space-y-4">
          <p className="text-3xl font-heading fontF-heading">{sondage.titre}</p>
          <Image
            className="h-[300px] w-full object-cover"
            src={sondage.image.link || ""}
            height={300}
            width={700}
            alt="sondage"
          />
          <p>
            La formation débutera {getHumanDate(new Date(sondage.date_debut))}{" "}
            et se terminera {getHumanDate(new Date(sondage.date_fin))}
          </p>
          <p className="text-md ">{sondage.description}</p>
        </header>
        <aside className="w-full h-fit lg:w-1/2 shrink-0 mx-auto rounded-md border-2 border-gray p-2 md:px-2 md:p-6 md:py-0 bg-white shadow-md">
          <SondageForm sondage={sondage} />
        </aside>
      </div>
    </section>
  );
};

export { SondageMain };
