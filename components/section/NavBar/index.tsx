import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function NavBar() {
  return (
    <nav className="fixed top-0 right-0 px-5 py-4 flex lg:gap-20 gap-5 text-xl text-background z-10">
      <ul className="hidden lg:flex gap-5 bg-white lg:px-5 lg:py-2 px-1 py-1 rounded-full justify-center items-center shadow-lg shadow-gray-950">
        <li>
          <Link href={"#"} className="hover:text-amber-500 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href={"#sobre"} className="hover:text-amber-500 transition">
            Sobre mim
          </Link>
        </li>
        <li>
          <Link href={"#servicos"} className="hover:text-amber-500 transition">
            Serviços
          </Link>
        </li>
        <li>
          <Link href={"#projetos"} className="hover:text-amber-500 transition">
            Projetos
          </Link>
        </li>
        <li>
          <Link href={"#"} className="hover:text-amber-500 transition">
            Contatos
          </Link>
        </li>
        <li className="bg-background text-white lg:px-5 lg:py-2 px-2 py-1 rounded-full hover:bg-amber-500 transition-colors">
          <AlertDialog>
            <AlertDialogTrigger>CV</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Deseja baixar o CV?</AlertDialogTitle>
                <AlertDialogDescription>
                  Ao clicar voce ira baixar o Curriculo virtual
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  <a href="/cv.docx" download>
                    Confirma
                  </a>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </li>
      </ul>
      <Sheet>
        <SheetTrigger className="bg-white lg:px-8 px-4 py-2 rounded-full shadow-lg shadow-gray-950 lg:hidden">
          Menu
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>navegação</SheetTitle>
            <Link
              href={"#"}
              className="mx-5 my-2 bg-amber-50 text-center text-background rounded-full"
            >
              Home
            </Link>
            <Link
              href={"#sobre"}
              className="mx-5 my-2 bg-amber-50 text-center text-background rounded-full"
            >
              Sobre mim
            </Link>
            <Link
              href={"#servicos"}
              className="mx-5 my-2 bg-amber-50 text-center text-background rounded-full"
            >
              Serviços oferecidos
            </Link>
            <Link
              href={"#projetos"}
              className="mx-5 my-2 bg-amber-50 text-center text-background rounded-full"
            >
              Projetos
            </Link>
            <Link
              href={"#"}
              className="mx-5 my-2 bg-amber-50 text-center text-background rounded-full"
            >
              Contatos
            </Link>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger className="bg-white lg:px-8 px-4 py-2 rounded-full shadow-lg shadow-gray-950">
          <FaWhatsapp className="text-2xl" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Entre em contato</SheetTitle>
            <SheetDescription>
              Entre em contato comigo para mais informações
            </SheetDescription>
            <Link
              target="_blank"
              href={"https://wa.me/5583991651441"}
              className="mx-5 my-2 bg-amber-50 text-center text-background rounded-full"
            >
              Whatsapp
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/ander_tk/"}
              className="mx-5 my-2 bg-amber-50 text-center text-background rounded-full"
            >
              Instagram
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/andersoncostadev"}
              className="mx-5 my-2 bg-amber-50 text-center text-background rounded-full"
            >
              Linkedin
            </Link>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default NavBar;
