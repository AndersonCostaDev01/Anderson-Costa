"use client";
import Link from "next/link";
import React from "react";

const services = [
  {
    name: "Desenvolvimento Web",
    description: "Desenvolvimento de sites e aplicativos web",
  },
  {
    name: "Desenvolvimento Mobile",
    description: "Desenvolvimento de aplicativos mobile",
  },
  {
    name: "Desenvolvimento de aplicativos webs",
    description: "Desenvolvimento de aplicativos webs para seu negócio", 
  },
  {
    name: "Desenvolvimento de automatizacoes",
    description: "Desenvolvimento de automatizacoes para melhorar seu negocio",
  }
];



export default function Services() {
    return (
    <section id="servicos" className="container mx-auto mt-5">
      <div className="flex flex-col gap-10 text-center text-xl ">
        <h2 className="text-3xl">Serviços</h2>
        <p>
          Aqui ofereço diversos serviçoes para facilitar sua vida no mundo digital,
          seja para criar uma imagem digital ou uma automação para melhorar seu
          negocio
        </p>
        <h3>Exemplos de serviços ofertados: </h3>
        <div className="whitespace-normal">
          <div className="flex flex-col gap-8 lg:flex-row justify-center items-center">
          {services.map((service) => (
            <div
              className="border border-gray-200 flex flex-col gap-2 items-center justify-center rounded-2xl h-[200px] w-[200px] p-4"
              key={service.name}
            >
              <div className="flex flex-col justify-center items-center">
                <h4 className="font-bold text-center break-words">{service.name}</h4>
              </div>
              <p className="text-sm w-full text-center break-words max-w-[160px] whitespace-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        </div>

        <Link href={"https://wa.me/5583991651441"} target="_blank" className=" bg-white text-center text-background rounded-full hover:bg-gray-500 transition px-4 py-2 border border-background w-[300px] lg:w-[500px] self-center">
        Qualquer serviço ou projeto, entre em contato comigo por <b className="font-bold">whatsapp</b>
      </Link>
      </div>
      <div className="bg-white w-full h-[1.5px] mt-15 rounded"/>
    </section>
  );
}
