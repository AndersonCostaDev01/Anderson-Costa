import Contatos from "./components/my/contatos";
import Hero from "./components/my/hero";
import Navbar from "./components/my/navbar";
import Projetos from "./components/my/projetos";
import Servicos from "./components/my/servicos";

function App() {
  

  return (
    <div className="bg-[#040718]">
      <div className="w-full max-w-8/10 mx-auto">
        <Hero />
      </div>
      <Navbar />
      <div className="w-full max-w-8/10 mx-auto">
        <Servicos />
        <Projetos />
      </div>
      <Contatos />
    </div>
  );
}

export default App;
