import Contatos from "./components/my/contatos"
import Navbar from "./components/my/navbar"
import Projetos from "./components/my/projetos"
import Servicos from "./components/my/servicos"
import Sobre from "./components/my/sobre"

function App() {
 

  return (
    <div className="bg-zinc-200">
      <div  
      className="h-[400px] w-full absolute gradient"/>
      <div className="relative z-10 w-[90%] mx-auto">
        <Navbar />
        <Sobre />
        <Servicos />
        <Projetos />
      </div>
      <Contatos />
      <footer className="flex flex-col items-center gap-2 py-5">
        <p>Desenvolvido por Anderson Costa</p>
        <p>2024 - 2025</p>
      </footer>
    </div>
  )
}

export default App
