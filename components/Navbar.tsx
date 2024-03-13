"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { RunningText } from "./animation/RunningText";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Input } from "./ui/input";
import { About, Download, Publish } from "@/database/Navbar";

interface Navbars {
  title: string;
  description: string;
  link: string;
}

function Navbar() {
  const abouts: Navbars[] = About();
  const publishs: Navbars[] = Publish();
  const downloads: Navbars[] = Download();

  return (
    <div className="sticky top-0 bg-white w-full z-50 py-1">
      <nav className="flex justify-between place-items-center max-lg:hidden">
        <div className="flex place-items-center space-x-3 font-medium">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.5minvideo.id%2Fimages%2Fkoleksi-gambar-logo-kpu-terlengkap-ada-di-sini%2FLogo-Kpu.png&f=1&nofb=1&ipt=02e72d0e0712180814a462e261d5f492110e761de759a4163ca12c182bf73f3a&ipo=images"
            alt="logo"
            className=" w-14"
          />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tentang</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-3 gap-5 p-5 w-[42rem]">
                    {abouts.map((item, i) => (
                      <li
                        className="hover:bg-[#FEF6EB] rounded-md transition-all ease-linear duration-100 p-3 text-xs space-y-2"
                        key={i}
                      >
                        <Link
                          href={item.link}
                          target="_blank"
                          className="space-y-1"
                        >
                          <p>{item.title}</p>
                          <p className="text-muted-foreground font-light text-pretty">
                            {item.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Publikasi</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-3 gap-5 p-5 w-[42rem]">
                    {publishs.map((item, i) => (
                      <li
                        className="hover:bg-[#FEF6EB] rounded-md transition-all ease-linear duration-100 p-3 text-xs space-y-2"
                        key={i}
                      >
                        <Link
                          href={item.link}
                          target="_blank"
                          className="space-y-1"
                        >
                          <p>{item.title}</p>
                          <p className="text-muted-foreground font-normal text-pretty">
                            {item.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Download</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-3 gap-5 p-5 w-[42rem]">
                    {downloads.map((item, i) => (
                      <li
                        className="hover:bg-[#FEF6EB] rounded-md transition-all ease-linear duration-100 p-3 text-xs space-y-2"
                        key={i}
                      >
                        <Link
                          href={item.link}
                          target="_blank"
                          className="space-y-1"
                        >
                          <p>{item.title}</p>
                          <p className="text-muted-foreground font-normal text-pretty">
                            {item.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href={"https://cekdptonline.kpu.go.id"}>Cek DPT Online</Link>
        </div>
        <div className="flex space-x-3 place-items-center">
          <div className="relative w-80 overflow-hidden">
            <RunningText>
              <p className=" whitespace-nowrap">
                Ingat.. Ayoo ke TPS !! Pemilu Serentak, Rabu 14 Februari 2024...
                Pemilu Sarana Integrasi Bangsa
              </p>
            </RunningText>
            <div className="absolute w-20 inset-y-0 bg-gradient-to-r from-white " />
            <div className="absolute inset-y-0 w-20 right-0 bg-gradient-to-l from-white " />
          </div>
          <Link
            href={"https://pemilu2024.kpu.go.id"}
            className="px-3 py-2 border border-black rounded-full hover:text-white hover:bg-[#771414] hover:border-[#f8a73e] hover:px-5 transition-all ease-linear duration-100"
          >
            Info Pemilu 2024
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Search />
              </Button>
            </SheetTrigger>
            <SheetContent className="p-10">
              <Input type="text" size={20} />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <nav className="flex justify-between place-items-center text-sm lg:hidden">
        <div className="px-3 py-1 border border-black rounded-full hover:text-white hover:bg-black hover:px-5 transition-all ease-linear duration-100">
          Info Pemilu 2024
        </div>
        <div className="flex place-items-center space-x-3 font-medium">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.5minvideo.id%2Fimages%2Fkoleksi-gambar-logo-kpu-terlengkap-ada-di-sini%2FLogo-Kpu.png&f=1&nofb=1&ipt=02e72d0e0712180814a462e261d5f492110e761de759a4163ca12c182bf73f3a&ipo=images"
            alt="logo"
            className=" w-14"
          />
        </div>
        <div className="flex space-x-3 place-items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Search />
              </Button>
            </SheetTrigger>
            <SheetContent className="p-10">
              <Input type="text" size={20} />
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="py-10 px-5 h-3/4 overflow-scroll"
              side={"bottom"}
            >
              <h3 className="font-semibold text-3xl my-3">Tentang</h3>
              <ul>
                {abouts.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link} className="text-xl">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold text-3xl my-3">Publikasi</h3>
              <ul>
                {publishs.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link} className="text-xl">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold text-3xl my-3">Download</h3>
              <ul>
                {downloads.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link} className="text-xl">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="my-3">
                <Link
                  href={"https://cekdptonline.kpu.go.id"}
                  className="font-semibold text-3xl"
                >
                  Cek DPT Online
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
