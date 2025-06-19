import { useState } from "react";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" justify-center p-2 flex relative">
            {/* desktop */}
            <div className="w-[80%] bg-zinc-600 h-fit justify-center rounded-2xl p-1 hidden md:flex">
                <img src="/Vector.svg" alt="Anderson Costa" className="w-15 mx-5"/>
                <ul className="flex gap-6 flex-row-reverse w-full mx-10 text-white self-center">
                    <li className="text-white">
                        <a href="#sobre" className="text-white">Sobre</a>
                    </li>
                    <li>
                        <a href="#servicos">Serviços</a>
                    </li>
                    <li>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </div>
            {/* responsive */}
            <div className="w-full h-fit justify-between rounded-2xl p-1 flex md:hidden px-6 flex-row-reverse absolute">
                <button 
                className="bg-zinc-600 text-zinc-100 w-8 h-8 rounded-md hover:bg-zinc-700 active:bg-zinc-800 transition-all" 
                onClick={() => setIsOpen(!isOpen)}
                >※</button>
            </div>
            {isOpen && (
                <div className="w-full h-fit rounded-2xl py-2 flex md:hidden px-6 flex-row-reverse bg-zinc-600">
                    <ul className="flex gap-6 flex-col w-full mx-10 text-white self-center">
                        <li className="text-white">
                            <a href="#sobre" className="text-white">Sobre</a>
                        </li>
                        <li>
                            <a href="#servicos">Serviços</a>
                        </li>
                        <li>
                            <a href="#projetos">Projetos</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                    </ul>
                </div>
            )}	
        </div>
    )
}

export default Navbar