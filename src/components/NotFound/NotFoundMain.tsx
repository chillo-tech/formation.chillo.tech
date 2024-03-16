import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";

const NotFoundMain = () => {
  const router = useRouter();
  return (
    <div className="md:py-12">
      <div className="flex items-center container justify-center mx-auto ">
        <div className="flex flex-col items-center px-2 md:px-5 md:flex-row">
          <section className="w-full flex flex-col text-center shrink-0 md:w-1/2 md:items-start md:gap-6 ">
            <header>
              <h2 className="text-heading font-heading fontF-heading mt-5 mb-2 md:!m-0 text-center md:text-left md:leading-5">
                Ooops!
              </h2>
              <p>la page demandee n'existe pas</p>
            </header>
            <main>
              <p>Contactez nous au</p>
              <p>
                <Link
                  href={"tel:+33761705745"}
                  className="text-blue-500 font-bold hover:bg-blue-500/10 rounded-lg py-2"
                >
                  <button className="flex gap-3 justify-center items-center">
                    <FaPhoneAlt /> <span>+33 7 61 70 57 45</span>
                  </button>
                </Link>{" "}
              </p>
            </main>
            <footer>
              <button
                className={`py-5 my-4 px-6 font bold rounded-[35px] bg-blue-500 text-white w-full lg:w-fit`}
                onClick={() => router.push("/trainings")}
              >
                Liste des cours
              </button>
            </footer>
          </section>
          <section className="flex items-center justify-end w-1/2">
            <Image
              src="/images/not-found.png"
              alt="not-found"
              width={500}
              height={400}
              className=""
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export { NotFoundMain };
