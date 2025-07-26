import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

function Projetos() {
    type Projects = {
        titulo: string,
        descricao: string
        link: string
    }
    const projects: Projects[] = [
        {
            titulo: "e-food",
            descricao: "Um projeto de e-commerce desenvolvido com vite e react, com objetivo de simular um sistema completo de pedido de comidas com diversos restaurantes disponiveis no mercado.",
            link: "https://e-food-anderson-costa.vercel.app/"
        },
        {
            titulo: "QR-code",
            descricao: "Um sistema simples que pega um link e gera um QR-code para ele.",
            link: "https://qr-code-zeta-peach.vercel.app/"
        }, 
        {
            titulo: "DicioIndigena",
            descricao: "Um projeto freelancer onde fiz o front-end de um site de dicionário indígena. Site feito para um trabalho escolar pequeno.",
            link: "https://dicio-indigena.vercel.app/"
        },
        {
            titulo: "Anime Friends - Pagian ficticia",
            descricao: "Um projeto que busca conhecimento sobre novas tecnologias, ele simula uma pagina de evento que tem foco de conversão de clientes",
            link: "https://landing-page-fictitious.vercel.app/"
        }, 
        {
            titulo: "Disney+ Clone",
            descricao: "Um projeto onde me propus a criar uma clonagem da tela inicial do disney+",
            link: "https://clone-disney-one-lovat.vercel.app/"
        }, 
        {
            titulo: "API - Bookstore",
            descricao: "Um projeto onde me propus a criar uma API para venda de produtos em geral, neste projeto trabalhei com DRF (Django REST Framework) para desenvolvimento de uma api robusta que pode ser usada em diversos projetos. Alem de utilizar o sistema de Docker para criar um ambiente de desenvolvimento e produção.",
            link: "https://hub.docker.com/r/costaandersom/bookstore"
        }
    ]

    return (
        <div className="mt-10 flex mx-auto py-3 flex-col" id="projetos">
            <h3 className="text-2xl font-bold text-center mb-2">projetos</h3>
            <Carousel
                opts={{loop: true,}}
                plugins={[
                Autoplay({
                    delay: 3000,
                    stopOnFocusIn: true,
                    stopOnInteraction: true,
                    stopOnLastSnap: true
                })    
                ]}
            >
                <CarouselPrevious/>
                <CarouselNext/>
                <CarouselContent>
                    {projects.map((project, index) => (
                    <CarouselItem 
                    key={index}
                    className="md:basis-1/2 m-1">
                        <div className="flex flex-col mb-3 gap-4">
                            <div>
                                <h4 className="font-bold text-2xl">{project.titulo}</h4>
                                <div className="h-[80px] overflow-auto">
                                    <p>{project.descricao}</p>
                                </div>
                            </div>
                            <div>
                                <a 
                                href={project.link} 
                                target="_blank"
                                className="underline w-fit px-2 md:px-4 py-1 rounded-2xl mb-3 text-sm md:text-md">Veja na integra</a>
                            </div>
                            </div>
                        <iframe 
                        src={project.link} 
                        className="w-full h-[600px]"/>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Projetos