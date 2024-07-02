"use client";
import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import {
  Dialog,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  ChevronDown,
  Menu,
  Phone,
  Cookie,
  Scale,
  CircleHelp,
  Building2,
  Send,
  Wifi,
  X,
} from "lucide-react";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import LogoDark from "@/assets/logo/Paytonic-dark-full.png";
import POS from "@/assets/icon/point-sale.svg";
import { Button } from "./Button";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type NavItemType = {
  name: string;
  description: string;
  href: string;
  icon?: IconComponent;
  image?: StaticImageData;
};

const products: NavItemType[] = [
  {
    name: "Send Money",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: Send,
  },
  {
    name: "Bills",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: Wifi,
  },
  {
    name: "POS",
    description: "Get a better understanding of your traffic",
    href: "#",
    image: POS,
  },
];
const resources: NavItemType[] = [
  {
    name: "FAQs",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: CircleHelp,
  },
  {
    name: "About us",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: Building2,
  },
  {
    name: "Contact us",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: Phone,
  },
];
const policies: NavItemType[] = [
  {
    name: "Cookie Policy",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: Cookie,
  },
  {
    name: "Terms & Conditions",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: Scale,
  },
];

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Company", href: "#" },
];

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow  ${
        scrollPosition > 0
          ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
          : "shadow-none"
      }`}
    >
      <div className="max-width mx-auto flex items-center justify-between p-5">
        <Link href="/" className="flex items-center">
          <span className="sr-only">Paytonic</span>
          <Image className="h-8 w-36" src={LogoDark} alt="Logo" />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-x-6 text-lg font-semibold  text-gray-900">
          <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span>Products</span>
              <ChevronDown className="h-5 w-5" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div key={item.name}>
                      <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          {item.icon ? (
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            item.image && (
                              <Image
                                src={item.image}
                                alt={item.name}
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )
                          )}
                        </div>
                        <div>
                          <a
                            href={item.href}
                            className="font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span>Resources</span>
              <ChevronDown className="h-5 w-5" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {resources.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        {item.icon ? (
                          <item.icon className="h-6 w-6 " aria-hidden="true" />
                        ) : (
                          item.image && (
                            <Image
                              src={item.image}
                              alt={item.name}
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )
                        )}
                      </div>
                      <div>
                        <a
                          href={item.href}
                          className="font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span>Legal</span>
              <ChevronDown className="h-5 w-5" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {policies.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        {item.icon ? (
                          <item.icon className="h-6 w-6 " aria-hidden="true" />
                        ) : (
                          item.image && (
                            <Image
                              src={item.image}
                              alt={item.name}
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )
                        )}
                      </div>
                      <div>
                        <a
                          href={item.href}
                          className="font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
        <div className="hidden lg:flex items-center gap-x-6">
          <Link href={"https://main.d2olt434r74tow.amplifyapp.com/signup"}>
            <Button intent="outlined">Sign Up</Button>
          </Link>
          <Link href={"https://main.d2olt434r74tow.amplifyapp.com/login"}>
            <Button intent="primary">Login</Button>
          </Link>
        </div>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="pt-3 mb-5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/images/logo.png" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
