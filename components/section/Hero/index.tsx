import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative">
      {/* Logo no canto superior esquerdo (aparece apenas em telas grandes) */}
      <h1 className="hidden lg:block absolute top-4 left-4">
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="Anderson costa - dev - fullstack"
        />
      </h1>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-4">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="text-2xl  p-4 gap-4 flex flex-col">
            <h2 className="text-6xl font-black">Anderson Costa</h2>
            <h3>Desenvolvedor Full-stack </h3>
            <p>Aqui transformo sua identidade digital !!!</p>
            <p>Venha criar sua presença digital com que pode te ajudar</p>
            <Link
              href={"#sobre"}
              className="bg-white text-center text-background rounded-full hover:bg-gray-500 transition"
            >
              Saiba mais
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end items-end">
          <Image
            className="object-cover w-400 lg:w-[600px] xl:w-[700px]"
            alt="Imagem do programador Anderson Costa"
            src="/heroImage.png"
            width={1000} // Define o tamanho máximo
            height={1000}
          />
        </div>
      </div>
     <div className="bg-white w-full h-[2px] mt-30"/>
    </section>
  );
}

export default Hero;
