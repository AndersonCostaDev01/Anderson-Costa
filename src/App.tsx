import Navbar from "./components/my/navbar"
import Projetos from "./components/my/projetos"
import Servicos from "./components/my/servicos"
import Sobre from "./components/my/sobre"

function App() {
 

  return (
    <div className="bg-zinc-200">
      <div 
      className="h-[400px] w-full absolute gradient"/>
      <div className="relative z-10">
        <Navbar />
        <Sobre />
        <Servicos />
        <Projetos />
      </div>
    </div>
  )
}

export default App
