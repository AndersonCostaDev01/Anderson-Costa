"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import React from "react";
import Autoplay from "embla-carousel-autoplay"; // Certifique-se de ter essa dependência instalada

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type ServicesProps = {
  title: string;
  description: string;
  link: string;
};

const services: ServicesProps[] = [
  {
    title: "Desenvolvimento de sites",
    description:
      "Crie um site incrivel para sua empresa ou negócio com nosso desenvolvimento de sites",
    link: "/mockup.png",
  },
  {
    title: "Criação de logotipos",
    description:
      "Crie um logotipo incrivel para sua empresa ou negócio com nossa criação de logotipos",
    link: "/logo.svg",
  },
  {
    title: "Criação de identidade visual",
    description:
      "Crie uma identidade visual incrivel para sua empresa ou negócio com nossa criação de identidade visual",
    link: "/heroImage.png",
  },
];

export default function Services() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="servicos" className="container mx-auto mt-5">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:p-0 px-4">
        <div className="flex flex-col gap-7 text-center text-xl max-w-2xl lg:mt-28">
          <h2 className="text-3xl">
            Veja os serviços disponíveis para solicitar
          </h2>
          <p>
            Os serviços disponíveis podem melhorar e muito sua apresentação
            digital, desde uma primeira impressão até a conquista de seus
            clientes.
          </p>
          <Link
            target="_blank"
            href="https://wa.me/5583991651441"
            className="flex gap-2 bg-white text-background rounded-full justify-center items-center px-4 py-2 border border-background shadow-lg hover:bg-gray-100 transition"
          >
            Qualquer dúvida entre em contato pelo <FaWhatsapp />
          </Link>
        </div>
        <div className="lg:w-[700px]">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={() => plugin.current?.stop?.()}
            onMouseLeave={() => plugin.current?.reset?.()}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col gap-7 text-center text-xl justify-center border border-gray-500 mx-auto p-4 rounded-2xl h-[600px] w-[300px] lg:w-[500px]">
                    <h2 className="text-3xl">{service.title}</h2>
                    <p>{service.description}</p>
                    <Image
                      src={service.link}
                      alt={service.title}
                      width={500}
                      height={500}
                      className="object-cover w-300 lg:w-[300px] xl:w-[300px]"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute bottom-0 left-2" />
            <CarouselNext className="absolute bottom-0 right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
