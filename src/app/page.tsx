import { Heading, Hero, HomeLayout, Presentation } from "@/components";

export default function Home() {
  useHome()
  return (
    <HomeLayout>
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Presentation />
        <div className="">
          <div className="container mx-auto">
            <Heading
              label="Tous nos cours"
              title="Améliorez vos compétences en codage"
              description={`Que vous cherchiez à évoluer vers une carrière dans la technologie ou à progresser dans votre rôle actuel, mes cours vous donnent les connaissances et l'expérience dont vous avez besoin pour réussir.`}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"></div>
          </div>
        </div>
      </main>
    </HomeLayout>
  );
}


