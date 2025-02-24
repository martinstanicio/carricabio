"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navLinks } from "~/links";
import Brand from "./brand";
import SocialIcons from "./social-icons";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Navbar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="text-foreground transition-colors md:hidden"
          >
            <FontAwesomeIcon icon={faBars} />
            <span className="sr-only">Menú</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-between gap-8">
          <SheetHeader>
            <SheetTitle>
              <Brand />
            </SheetTitle>
          </SheetHeader>

          <NavigationMenu className="flex-initial">
            <NavigationMenuList className="flex-col space-x-0 space-y-3">
              {navLinks.map(({ label, path }, i) => (
                <NavigationMenuItem key={i}>
                  <SheetClose asChild>
                    <Link
                      href={path}
                      className={cn(navigationMenuTriggerStyle(), "text-lg")}
                    >
                      {label}
                    </Link>
                  </SheetClose>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <SheetFooter>
            <SocialIcons />
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {navLinks.map(({ label, path }, i) => (
            <NavigationMenuItem key={i}>
              <Link href={path} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-foreground transition-colors",
                  )}
                >
                  {label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
