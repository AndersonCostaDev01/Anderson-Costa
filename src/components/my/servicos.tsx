import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function Servicos() {
    return (
        <div className="mt-10 container flex mx-auto p-3 flex-col" id="servicos">
            <h3 className="text-2xl font-bold text-center mb-2">
                Abaixo veja todos os serviços que ofereço
            </h3>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="bg-zinc-600 rounded-2xl px-4 py-2 text-white">
                    <AccordionTrigger>Desenvolvimento de Páginas Web</AccordionTrigger>
                    <AccordionContent>
                    Tenho experiência no desenvolvimento de páginas web do zero, utilizando tecnologias como HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, MongoDB, MySQL, Prisma e NextAuth. Estou sempre em constante evolução, buscando aprimorar minhas habilidades para entregar interfaces modernas, responsivas e de alto desempenho.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-zinc-600 rounded-2xl px-4 py-2 text-white">
                    <AccordionTrigger>Desenvolvimento de APIs</AccordionTrigger>
                    <AccordionContent>
                    Tenho sólidos conhecimentos em desenvolvimento de APIs RESTful, criando backends escaláveis e seguros com Node.js, Express.js, MongoDB, MySQL, Prisma, além de trabalhar com Django REST Framework (DRF) e autenticação com NextAuth. Entrego soluções eficientes para a integração entre sistemas e o consumo de dados por aplicações front-end.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-zinc-600 rounded-2xl px-4 py-2 text-white">
                    <AccordionTrigger>Desenvolvimento de Automações</AccordionTrigger>
                    <AccordionContent>
                    Desenvolvo automações para tarefas repetitivas e processos manuais, como preenchimento de formulários, scraping de dados da web e manipulação de bancos de dados, utilizando Python e ferramentas como Selenium, BeautifulSoup e automação de planilhas.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-zinc-600 rounded-2xl px-4 py-2 text-white">
                    <AccordionTrigger>Integração de Sistemas</AccordionTrigger>
                    <AccordionContent>
                    Tenho experiência em criar integrações entre diferentes plataformas, como ERPs, CRMs, serviços externos via APIs REST ou SOAP, e bancos de dados, garantindo comunicação fluida entre as ferramentas utilizadas pela sua empresa.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-zinc-600 rounded-2xl px-4 py-2 text-white">
                    <AccordionTrigger>Projeto Completo e Personalizado</AccordionTrigger>
                    <AccordionContent>
                    Unindo todas as minhas especialidades, consigo entregar soluções completas e personalizadas para o seu negócio, desde o front-end até o back-end, com banco de dados, autenticação, APIs, integrações e automações. Busco sempre utilizar tecnologias modernas, focando em desempenho, escalabilidade e na melhor experiência para seus clientes e colaboradores.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default Servicos