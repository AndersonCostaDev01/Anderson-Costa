import Link from "next/link";
import "./contact.css";
import Image from "next/image";

type ContactProps = {
  name: string;
  svg: string;
  link: string;
  value: string;
};

const contact: ContactProps[] = [
  {
    name: "Whatsapp",
    svg: "/whatsapp.svg",
    link: "https://wa.me/5583991651441",
    value: "5583991651441",
  },
  {
    name: "Instagram",
    svg: "/instagram.png",
    link: "https://www.instagram.com/ander_tk/",
    value: "@ander_tk",
  },
  {
    name: "Github",
    svg: "/github.svg",
    link: "https://github.com/AndersonCostaDev01",
    value: "AndersonCostaDev01",
  },
  {
    name: "Linkedin",
    svg: "/linkedin.svg",
    link: "https://www.linkedin.com/in/andersoncostadev/",
    value: "in/andersoncostadev",
  },
  {
    name: "Endereço",
    svg: "/location.svg",
    link: "https://www.google.com/maps/search/?api=1&query=-7.226046,-35.889177",
    value: "Campina Grande - PB",
  },
];
function Contact() {
  return (
    <div className="div">
      <section id="contato" className="container mx-auto mt-5 lg:pb-40">
        <h2 className="text-3xl text-center mb-4">Contatos</h2>
        <div className="flex flex-col gap-4 lg:flex-row justify-center items-center">
          {contact.map((cont) => (
            <div className="lg:p-0 px-4 flex justify-center" key={cont.name}>
              <div>
                <div className="border border-gray-200 flex flex-col gap-4 items-center justify-center rounded-2xl w-[200px] p-4">
                  <div className="flex flex-col justify-center items-center">
                    <h4>{cont.name}</h4>
                    <Image
                      src={cont.svg}
                      alt={cont.name}
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className="bg-gray-200 w-full h-[1px]" />
                  <Link href={cont.link} target="_blank">
                    <p>{cont.value}</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;
