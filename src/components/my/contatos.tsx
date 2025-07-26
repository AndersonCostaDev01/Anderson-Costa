import { 
    FaWhatsapp,
    FaInstagram,
    FaGithub,
    FaLinkedin 
} from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";


function Contatos() {
    return (
        <div className="mt-16 flex mx-auto contatos h-[150px] w-full" id="contato">
            <div className="flex flex-col w-[80%] mx-auto  items-center">
                <h3 className="text-2xl font-bold textc">Entre em contato comigo</h3>
                <ul className="mt-6 flex gap-4">
                    <li>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=5588999999999">
                            <FaWhatsapp size={30} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/ander_tk/">
                            <FaInstagram size={30} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/AndersonCostaDev01">
                            <FaGithub size={30} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="mailto:costaandersom23@gmail.com">
                            <MdOutlineAlternateEmail size={30} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/andersoncostadev/">
                            <FaLinkedin size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Contatos