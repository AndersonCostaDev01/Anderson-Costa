import Image from "next/image";
import Link from "next/link";

function Abautme() {
  return (
    <section id="sobre" className="container mx-auto mt-5">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div>
          <Image src="/mockup.png" alt="" width={500} height={500} />
        </div>
        <div className="flex flex-col  gap-7 text-center text-xl lg:p-0 px-4 max-w-2xl lg:mt-7">
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
            className="bg-white text-center text-background rounded-full"
            href={"#servicos"}
          >
            Saiba mais sobre os serviços disponiveis
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Abautme;
