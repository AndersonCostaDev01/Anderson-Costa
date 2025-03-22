import Image from "next/image";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

type SkilsProps = {
  name: string;
  svg: string;
  link: string;
};

const skils: SkilsProps[] = [
  {
    name: "HTML",
    svg: "/html.svg",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  {
    name: "CSS",
    svg: "/css.svg",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    name: "Javascript",
    svg: "/js.svg",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    svg: "/type.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    svg: "/react.svg",
    link: "https://react.dev/",
  },
  {
    name: "Next",
    svg: "/nextjs.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "Tailwind",
    svg: "/tailwind.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Git",
    svg: "/git.svg",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    svg: "/github.svg",
    link: "https://github.com/",
  },
  {
    name: "Node",
    svg: "/node.svg",
    link: "https://nodejs.org/en",
  },
  {
    name: "Linux",
    svg: "/linux.svg",
    link: "https://www.linux.org/",
  },
  {
    name: "Figma",
    svg: "/figma.svg",
    link: "https://www.figma.com/",
  },
];
function Skils() {
  return (
    <section id="skils" className="container mx-auto mt-5 px-4">
      <h2 className="text-3xl text-center mb-4">Minhas Habilidades</h2>
      <div className="flex gap-4 justify-between lg:gap-7">
        {skils.map((skil) => (
          <div key={skil.name}>
            <HoverCard>
              <HoverCardTrigger>
                <Image src={skil.svg} alt="" width={50} height={50} />
              </HoverCardTrigger>
              <HoverCardContent>
                <p>{skil.name}</p>
                <Link href={skil.link} target="_blank">
                  Saiba mais
                </Link>
              </HoverCardContent>
            </HoverCard>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skils;
