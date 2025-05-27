import Image from "next/image";
import Link from "next/link";

function Abautme() {
  return (
    <section id="sobre" className="container mx-auto mt-15 mb-15">
      <div className="flex flex-col  gap-10 text-center text-xl ">
        <h2 className="text-6xl">Muito prazer</h2>
        <p>
          me chamo <span className="font-bold">Anderson Costa</span> sou um
          desenvolvedor full-stack e intusiasta no mundo do designe
        </p>
        <p>
          Aqui posso te disponibilizar varios serviços para melhorar ou criar
          sua imagem digital, atraindo mais publico e melhorando seu negocio
        </p>
        <Link
          className="bg-white text-center text-background rounded-full hover:bg-gray-500 transition px-4 py-2 border border-background w-[300px] lg:w-[500px] self-center" 
          href={"#servicos"}
        >
          Saiba mais sobre os serviços disponiveis
        </Link>
      </div>
      <div className="bg-white w-full h-[1.5px] mt-15 rounded"/>
    </section>
  );
}

export default Abautme;
