import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarItems } from "@/lib/constants/navbar";
import { Menu } from "lucide-react";
import { NavbarLink } from "./NavbarLink";

export const Navbar = () => {
  const navbarLinks = navbarItems.map((ni) => (
    <NavbarLink key={ni.name} navbarLink={ni} />
  ));

  return (
    <header className="w-fit lg:w-full h-fit lg:h-16 bg-white lg:shadow-md pl-3 pt-3 lg:px-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="w-fit h-fit p-2 rounded-md lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="px-4 max-w-64 sm:max-w-64 sm:w-2/4"
        >
          <SheetHeader className="mb-4 pl-2 text-left">
            <SheetTitle>DataFlowX</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col justify-center gap-2">
            {navbarLinks}
          </div>
        </SheetContent>
      </Sheet>
      <nav className="hidden lg:flex justify-center gap-2">{navbarLinks}</nav>
    </header>
  );
};
