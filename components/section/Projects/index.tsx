import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProjectsProps = {
  name: string;
  link: string;
  description: string;
};

const projects: ProjectsProps[] = [
  {
    name: "Academia do codigo",
    link: "https://academia-do-codigo.vercel.app/",
    description:
      "Site para simular uma landing page de uma academia com sistema de login e cadastro",
  },
  {
    name: "Gerar qr code",
    link: "https://qr-code-zeta-peach.vercel.app/",
    description: "Site para gerar qr code com o link que desejar",
  },
  {
    name: "E-Food",
    link: "https://e-food-anderson-costa.vercel.app/",
    description:
      "Um siste de delivery de comida com diversos restaurantes e produtos",
  },
  {
    name: "Dicio indigena",
    link: "https://dicio-indigena.vercel.app/",
    description:
      "Um dicionario de termos indigenas brasileiros, feito para uma apresentação de um grupo de alunos",
  },
  {
    name: "My github",
    link: "https://my-github-d2v5.vercel.app/",
    description: "Um sistema para consultar seus repositorios no github",
  },
];

function Projects() {
  return (
    <section id="projetos" className="container mx-auto mt-5 lg:p-0 px-4">
      <h2 className="text-3xl text-center mb-4">Meus projetos</h2>
      <div>
        <Carousel>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.name}>
                <div className="flex flex-col gap-4 border border-gray-200 p-4 rounded-2xl">
                  <h3 className="text-2xl font-bold text-center">
                    {project.name}
                  </h3>
                  <p>{project.description}</p>
                  <iframe
                    src={project.link}
                    className="w-full h-[600px] rounded-2xl"
                  ></iframe>
                  <a
                    href={project.link}
                    target="_blank"
                    className="bg-white text-background rounded-full text-center py-2"
                  >
                    Acessar
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 bottom-0 -translate-y-1/2" />
          <CarouselNext className="absolute right-2 bottom-0 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
