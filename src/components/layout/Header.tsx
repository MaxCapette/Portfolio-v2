import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Sneaker from "../sneaker/page";
export default function Header() {
    return (
  <header className="bg-input/80 text-primary-foreground py-4 px-6 sticky top-0 z-50  backdrop-blur flex items-center justify-between">
    <Link href="#" className="flex items-center gap-2" prefetch={false}>
      <Sneaker />
    </Link>
    <nav className="hidden md:flex gap-6">
      <Link
        href="/"
        className="hover:underline underline-offset-4"
        prefetch={false}
      >
        Home
      </Link>
      <Link
        href="#about"
        className="hover:underline underline-offset-4"
        prefetch={false}
      >
        About
      </Link>
      <Link
        href="#projects"
        className="hover:underline underline-offset-4"
        prefetch={false}
      >
        Projects
      </Link>
      <Link
        href="#skills"
        className="hover:underline underline-offset-4"
        prefetch={false}
      >
        Technos
      </Link>
      <Link
        href="#experience"
        className="hover:underline underline-offset-4"
        prefetch={false}
      >
        Experience
      </Link>
      <Link
        href="#contact"
        className="hover:underline underline-offset-4"
        prefetch={false}
      >
        Contact
      </Link>
    </nav>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" className="md:hidden">
          <MenuIcon className="h-6 w-6  " />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        className="w-full max-w-xs  p-6 bg-input"
        side="right"
      >
        <div className="flex flex-col gap-6">
          <SheetClose asChild>
            <Link
              className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
              href="#about"
            >
              About
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
              href="#projects"
            >
              Projects
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
              href="#skills"
            >
              Technos
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
              href="#experience"
            >
              Experience
            </Link>
          </SheetClose>
         
          <SheetClose asChild>
            <Link
              className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
              href="#contact"
            >
              Contact
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  </header>);
}
function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
