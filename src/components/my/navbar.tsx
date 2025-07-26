import { useState } from "react";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" justify-center flex sticky top-0">
            {/* desktop */}
            <div className="w-full hidden md:flex bg-[#A66A00] p-2">
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
            <div className="w-full h-fit justify-between p-1 flex md:hidden px-6 flex-row-reverse absolute bg-[#A66A00] mb-5">
                <img src="/images/andersonCosta1.png.jpg" alt="anderson costa" className="w-15 rounded-full"/>
                <button 
                className="text-zinc-100 w-15 h-15 flex items-center justify-center transition-all" 
                onClick={() => setIsOpen(!isOpen)}
                >※</button>
            </div>
            {isOpen && (
                <div className="w-full h-fit rounded-2xl py-2 flex md:hidden px-6 flex-row-reverse bg-[#A66A00] mt-5">
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