function Hero () {
    return (
        <div 
        id="sobre"
        className="container flex mx-auto flex-col-reverse md:flex-row md:justify-between pt-10 mt-10">
            <div className="w-full h-3/6 mt-60 md:mt-6 text-white flex flex-col  justify-center z-10">
                <h1 className="text-4xl font-bold gap-2">Ola Me chamo <b className="text-[#A66A00]">Anderson Costa</b></h1>
                <h2 className="text-2xl font-bold mt-5 underline">Sou um desenvolvedor full-stack apaixonado por tecnologia e inovação</h2>
                <p className="mt-5">
                    Tenho um forte compromisso com a qualidade dos meus projetos e estou sempre buscando maneiras de melhorar minhas habilidades e conhecimentos. 
                    Estou sempre em busca de novos desafios e oportunidades para crescer e aprender. 
                    Se você está procurando um desenvolvedor full-stack dedicado e comprometido, estou aqui para ajudar você a alcançar seus objetivos. 
                    Vamos trabalhar juntos para criar soluções inovadoras e impactar positivamente a vida das pessoas.</p>

                    <div className="mt-5 gap-4 flex md:flex-row flex-col w-full p-4 mb-7">
                        <a href="#servicos" className="bg-[#A66A00] w-full h-10 flex items-center justify-center rounded-2xl text-white ">Venha ver meus serviços</a>
                        <a href="#contato" className="bg-[#A66A00] w-full h-10 flex items-center justify-center rounded-2xl text-white">Entre em contato</a>
                    </div>
            </div>
            <div className="">
                <img src="/images/andersonCosta1.png.jpg" alt="Anderson Costa" className="w-[80%] rounded-full absolute md:static"/>
            </div>
        </div>
    )
}   

export default Hero