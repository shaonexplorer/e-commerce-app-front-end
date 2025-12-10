"use client";

import {
  BookOpenIcon,
  InfoIcon,
  LifeBuoyIcon,
  ShoppingCart,
} from "lucide-react";

import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { useEffect, useState } from "react";

import { clearCookies } from "@/actions/sign-out";
import { ModeToggle } from "../theme/theme-toggle";
import { getAccessToken } from "@/actions/get-accessToken";

import SearchInput from "./nav/search";
import { Badge } from "@/components/ui/badge";
import { useAppSelector } from "@/lib/hooks/hooks";
import jwt, { JwtPayload } from "jsonwebtoken";

// Navigation links array to be used in both desktop and mobile menus

interface INavigationLinks {
  href?: string;
  label?: string;
  submenu?: boolean;
  type?: "description" | "icon" | "simple";
  items?: {
    href?: string;
    label?: string;
    description?: string;
    icon?: string;
  }[];
}

export default function NavBar() {
  // const [user, setUser] = useState<UserProfile>();
  const [isLoading, setIsLoading] = useState(true);
  const [accessToken, setAccessToken] = useState<string | null | undefined>();

  const veriFiedUser = jwt.decode(accessToken as string);
  const role = (veriFiedUser as JwtPayload).userRole;

  const navigationLinks: INavigationLinks[] = [
    { href: "/", label: "Home" },
    // {
    //   label: "Features",
    //   submenu: true,
    //   type: "description",
    //   items: [
    //     {
    //       href: "#",
    //       label: "Components",
    //       description: "Browse all components in the library.",
    //     },
    //     {
    //       href: "#",
    //       label: "Documentation",
    //       description: "Learn how to use the library.",
    //     },
    //     {
    //       href: "#",
    //       label: "Templates",
    //       description: "Pre-built layouts for common use cases.",
    //     },
    //   ],
    // },
    // {
    //   label: "Pricing",
    //   submenu: true,
    //   type: "simple",
    //   items: [
    //     { href: "#", label: "Product A" },
    //     { href: "#", label: "Product B" },
    //     { href: "#", label: "Product C" },
    //     { href: "#", label: "Product D" },
    //   ],
    // },

    {
      label: "About",
      submenu: true,
      type: "icon",
      items: [
        { href: "#", label: "Getting Started", icon: "BookOpenIcon" },
        { href: "#", label: "Tutorials", icon: "LifeBuoyIcon" },
        { href: "#", label: "About Us", icon: "InfoIcon" },
      ],
    },
  ];

  if (role == "SELLER") {
    navigationLinks.push({ href: "/seller/home", label: "DashBoard" });
  } else if (role == "ADMIN") {
    navigationLinks.push({ href: "/admin/home", label: "DashBoard" });
  }

  const { items } = useAppSelector((state) => state.cart);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      // const data = await getMe();
      // setUser(data.data);

      const res = await getAccessToken();
      setAccessToken(res);
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  const handleLogOut = async () => {
    setIsLoading(true);
    // await signOut();
    await clearCookies();
    setAccessToken(null);
    // router.refresh();
    // setUser(undefined);
    setIsLoading(false);
  };

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      {link.submenu ? (
                        <>
                          <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                            {link.label}
                          </div>
                          <ul>
                            {link.items &&
                              link?.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <NavigationMenuLink className="py-1.5">
                                    <Link href={item.href as string}>
                                      {item.label}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                          </ul>
                        </>
                      ) : (
                        <NavigationMenuLink className="py-1.5">
                          <Link href={link.href as string}> {link.label}</Link>
                        </NavigationMenuLink>
                      )}
                      {/* Add separator between different types of items */}
                      {index < navigationLinks.length - 1 &&
                        // Show separator if:
                        // 1. One is submenu and one is simple link OR
                        // 2. Both are submenus but with different types
                        ((!link.submenu &&
                          navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            !navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            navigationLinks[index + 1].submenu &&
                            link.type !== navigationLinks[index + 1].type)) && (
                          <div
                            role="separator"
                            aria-orientation="horizontal"
                            className="-mx-1 my-1 h-px w-full bg-border"
                          />
                        )}
                    </NavigationMenuItem>
                  ))}
                  <div
                    role="separator"
                    aria-orientation="horizontal"
                    className="-mx-1 my-1 h-px w-full bg-border"
                  />
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    {!accessToken && !isLoading ? (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-sm w-full"
                      >
                        <Link href="/login">Sign In</Link>
                      </Button>
                    ) : !isLoading && accessToken ? (
                      <Button
                        onClick={handleLogOut}
                        size="sm"
                        className="text-sm w-full"
                      >
                        Sign Out
                      </Button>
                    ) : null}
                    {!accessToken && !isLoading && (
                      <Button asChild size="sm" className="text-sm w-full">
                        <Link href="/signup">Register</Link>
                      </Button>
                    )}
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
            {/* Navigation menu */}
            <NavigationMenu viewport={false} className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent px-2 py-1.5 font-medium text-muted-foreground hover:text-primary *:[svg]:-me-0.5 *:[svg]:size-3.5">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="z-50 p-1 data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16!">
                          <ul
                            className={cn(
                              link.type === "description"
                                ? "min-w-64"
                                : "min-w-48"
                            )}
                          >
                            {link.items &&
                              link.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <NavigationMenuLink
                                    href={item.href}
                                    className="py-1.5"
                                  >
                                    <Link href={item.href as string}>
                                      {/* Display icon if present */}
                                      {link.type === "icon" &&
                                        "icon" in item && (
                                          <div className="flex items-center gap-2">
                                            {item.icon === "BookOpenIcon" && (
                                              <BookOpenIcon
                                                size={16}
                                                className="text-foreground opacity-60"
                                                aria-hidden="true"
                                              />
                                            )}
                                            {item.icon === "LifeBuoyIcon" && (
                                              <LifeBuoyIcon
                                                size={16}
                                                className="text-foreground opacity-60"
                                                aria-hidden="true"
                                              />
                                            )}
                                            {item.icon === "InfoIcon" && (
                                              <InfoIcon
                                                size={16}
                                                className="text-foreground opacity-60"
                                                aria-hidden="true"
                                              />
                                            )}
                                            <span>{item.label}</span>
                                          </div>
                                        )}

                                      {/* Display label with description if present */}
                                      {link.type === "description" &&
                                      "description" in item ? (
                                        <div className="space-y-1">
                                          <div className="font-medium">
                                            {item.label}
                                          </div>
                                          <p className="line-clamp-2 text-xs text-muted-foreground">
                                            {item?.description}
                                          </p>
                                        </div>
                                      ) : (
                                        // Display simple label if not icon or description type
                                        !link.type ||
                                        (link.type !== "icon" &&
                                          link.type !== "description" && (
                                            <span>{item.label}</span>
                                          ))
                                      )}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink className="py-1.5 font-medium text-muted-foreground hover:text-primary">
                        <Link href={link.href as string}>{link.label}</Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* search input */}
        <div className="w-full  ">
          <SearchInput />
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link href={"/cart"} className="relative mr-2">
            <ShoppingCart />
            {items.length > 0 && (
              <Badge className="absolute top-[-10px] right-[-10px] rounded-full w-[20px] h-[20px] bg-green-400">
                {items.reduce((total, item) => total + item.quantity, 0)}
              </Badge>
            )}
          </Link>
          <ModeToggle />

          <div className="hidden sm:flex">
            {!accessToken && !isLoading ? (
              <Button asChild variant="ghost" size="sm" className="text-sm">
                <Link href="/login">Sign In</Link>
              </Button>
            ) : !isLoading && accessToken ? (
              <Button onClick={handleLogOut} size="sm" className="text-sm">
                Sign Out
              </Button>
            ) : null}
            {!accessToken && !isLoading && (
              <Button asChild size="sm" className="text-sm">
                <Link href="/signup">Register</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
