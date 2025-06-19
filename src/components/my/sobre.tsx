function Sobre () {
    return (
        <div
        className="mt-10 container flex mx-auto p-3 flex-col-reverse md:flex-row md:justify-between" 
        id="sobre">
            <div className="w-full h-auto mt-6">
                <h1 className="text-4xl font-bold gap-2">
                    Anderson Costa - <b>Desenvolvedor Full-stack</b>
                </h1>
                <h2 className="text-2xl font-bold mt-5 underline text-center">
                    "Com códigos, construo o caminho para o futuro — do backend à interface, transformo ideias em soluções."
                    <span>🚀</span>
                </h2>
                <p className="mt-5">
                    Prazer me chamo <b>Anderson Costa</b> Sou um desenvolvedor full-stack apaixonado por tecnologia e
                    inovação. Tenho um forte compromisso com a qualidade dos meus projetos e estou sempre buscando
                    maneiras de melhorar minhas habilidades e conhecimentos. Estou sempre em busca de novos desafios e
                    oportunidades para crescer e aprender. Se você está procurando um desenvolvedor full-stack
                    dedicado e comprometido, estou aqui para ajudar você a alcançar seus objetivos. Vamos trabalhar
                    juntos para criar soluções inovadoras e impactar positivamente a vida das pessoas.
                </p>
                <div className="mt-5 bg-zinc-600 w-fit px-4 py-1 rounded-2xl">
                    <a href="#servicos">Venha ver meus serviços</a>
                </div>
            </div>

            <div className="relative md:w-2xl md:h-2xl flex items-center">
                <img
                    src="/images/andersonCosta1.png.jpg"
                    alt="Anderson Costa"
                    className="block w-full h-full rounded-2xl"
                />
                <img
                    src="/images/andersonCosta.png"
                    alt="Anderson Costa"
                    className="absolute top-0 left-0 transition-opacity duration-300 hover:opacity-0 cursor-pointer w-full h-full active:opacity-0 rounded-2xl"
                />
            </div>
        </div>
    );
}

export default Sobre;