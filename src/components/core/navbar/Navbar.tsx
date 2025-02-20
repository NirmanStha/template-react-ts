import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
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
} from "@/components/ui/navigation-menu";
import ImgComponent from "../imgComponent/ImgComponent";
import { AvatarProps } from "@/components/propsTypes/Avatar";
import { NavLinks } from "@/components/propsTypes/NavLinks";
import { DropDownMenuProps } from "@/components/propsTypes/DropDownMenu";
import { ImgPropsType } from "@/components/propsTypes/ImgPropsType";

interface NavbarProps {
  navLinks: NavLinks[];
  linkClassName?: string;
  containerClassName?: string;
  isLoggedIn?: boolean;
  img: ImgPropsType;
  bgColorName: string;
  avatarProps?: AvatarProps;
  dropDownMenu?: DropDownMenuProps;
}

export const Navbar: React.FC<NavbarProps> = ({
  navLinks,
  linkClassName,
  containerClassName,
  isLoggedIn = false,
  img,
  bgColorName,
  avatarProps,
  dropDownMenu,
}) => {
  return (
    <nav className={cn("w-full", "py-4", bgColorName)}>
      <div className="conatiner">
        <div
          className={cn(
            "flex items-center justify-between px-4",
            containerClassName,
            bgColorName
          )}
        >
          {/*logo*/}
          <div className="flex items-center justify-center h-fit w-fit">
            <ImgComponent {...img} />
          </div>
          {/* desktop nav links */}
          <div className="hidden lg:block">
            <NavigationMenu className="flex items-center space-x-4">
              {navLinks.map((link, i) => (
                <NavigationMenuItem key={i} className="list-none">
                  <Link
                    to={link.url || "#"}
                    className={cn(
                      "text-gray-800",
                      "hover:text-gray-600 hover:underline",
                      "transition-colors",
                      linkClassName
                    )}
                  >
                    {link.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenu>
          </div>

          {isLoggedIn ? (
            <div className="hidden lg:block">
              {avatarProps && (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src={avatarProps.src} alt={avatarProps.alt}>
                        <AvatarFallback>
                          {avatarProps.username || "N"}
                        </AvatarFallback>
                      </AvatarImage>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {avatarProps.avatarItems?.map((item) => (
                      <DropdownMenuItem key={item.title}>
                        <Link to={item.url || "#"}>{item.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Button>Login</Button>
            </div>
          )}
          {/* mobile nav links */}
          {isLoggedIn ? (
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  {dropDownMenu?.dropDownIcon ? (
                    React.cloneElement(dropDownMenu?.dropDownIcon, {
                      className: cn(
                        "text-gray-800",
                        "hover:text-gray-600",
                        "transition-colors",
                        dropDownMenu?.dropDownIconClassName
                      ),
                      size: dropDownMenu?.dropDownIconSize || 24,
                    })
                  ) : (
                    <CiMenuBurger
                      className={cn(
                        "text-gray-800",
                        "hover:text-gray-600",
                        "transition-colors",
                        dropDownMenu?.dropDownIconClassName
                      )}
                      size={dropDownMenu?.dropDownIconSize || 24}
                    />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={cn(dropDownMenu?.dropContentClassName)}
                >
                  {navLinks.map((link) => (
                    <DropdownMenuItem
                      key={link.url}
                      className={cn(dropDownMenu?.dropItemClassName)}
                    >
                      <Link
                        to={link.url || "#"}
                        className={cn(
                          "transition-colors",
                          dropDownMenu?.dropLabelClassName
                        )}
                      >
                        {link.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
