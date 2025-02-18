import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link as LInk } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiMenuBurger } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

interface NavLinks {
  title: string;
  url?: string;
  description?: string;
}
interface AvatarProps {
  src?: string;
  alt?: string;
  size?: string;
  className?: string;
  bgColorName?: string;
  avatarItems?: AvatarItems[];
}
interface AvatarItems {
  title: string;
  url?: string;
}
interface NavbarProps {
  navLinks: NavLinks[];
  linkClassName?: string;
  className?: string;
  isLoggedIn?: boolean;
  logo: React.ReactNode | string;
  mobileLinkClassName?: string;
  logoSize?: string;
  userName?: string;
  bgColorName?: string;
  avatarProps?: AvatarProps;
}

export const Navbar: React.FC<NavbarProps> = ({
  navLinks,
  linkClassName,
  className,
  isLoggedIn,
  logo,
  bgColorName,
  mobileLinkClassName,
  logoSize,
  userName,
  avatarProps,
}) => {
  return (
    <nav className={cn("w-full", "py-4", bgColorName)}>
      <div className="conatiner">
        <div
          className={cn(
            "flex items-center justify-between",
            className,
            bgColorName
          )}
        >
          {/*logo*/}
          <div
            className="flex items-center justify-center"
            style={{
              height: logoSize || "auto",
              width: logoSize || "auto",
            }}
          >
            {typeof logo === "string" ? (
              <img
                src={logo}
                alt="logo"
                style={{
                  height: logoSize || "auto",
                  width: logoSize || "auto",
                }}
              />
            ) : (
              logo
            )}
          </div>
          {/* desktop nav links */}
          <div className="hidden lg:block">
            <NavigationMenu>
              {navLinks.map((link, i) => (
                <NavigationMenuItem key={i}>
                  <NavigationMenuLink
                    href={link.url}
                    className={cn(
                      "text-gray-800",
                      "hover:text-gray-600",
                      "transition-colors",
                      linkClassName
                    )}
                  >
                    {link.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenu>
          </div>

          {/* <ul className=" hidden lg:flex  items-center justify-between space-x-4">
            {navLinks.map((link) => (
              <li key={link.url}>
                <LInk
                  to={link.url}
                  className={cn(
                    "text-gray-800",
                    "hover:text-gray-600",
                    "transition-colors",
                    linkClassName
                  )}
                >
                  {link.title}
                </LInk>
              </li>
            ))}
          </ul> */}
          {/* mobile nav links */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <CiMenuBurger className="block lg:hidden" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.url}>
                    <LInk
                      to={link.url || "#"}
                      className={cn(
                        "text-gray-800",
                        "hover:text-gray-600",
                        "transition-colors",
                        mobileLinkClassName
                      )}
                    >
                      {link.title}
                    </LInk>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {isLoggedIn ? (
            <div className="hidden lg:block">
              {avatarProps && (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src={avatarProps.src} alt={avatarProps.alt}>
                        <AvatarFallback>{userName}</AvatarFallback>
                      </AvatarImage>
                    </Avatar>
                  </DropdownMenuTrigger>
                </DropdownMenu>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Button>Sign In</Button>
              <Button>Sign Up</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
