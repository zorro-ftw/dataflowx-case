import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export interface NavbarLink {
  name: string;
  href: string;
}

export const NavbarLink = ({ navbarLink }: { navbarLink: NavbarLink }) => {
  const path = useLocation().pathname;
  return (
    <Button
      variant={path === navbarLink.href ? "default" : "ghost"}
      asChild
      className="px-2 h-fit w-full lg:w-fit justify-start"
    >
      <Link to={navbarLink.href}>{navbarLink.name}</Link>
    </Button>
  );
};
