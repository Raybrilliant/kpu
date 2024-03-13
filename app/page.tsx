import KpuNews from "@/components/KpuNews";
import Navbar from "@/components/Navbar";
import HeadlineUp from "@/components/animation/HeadlineUp";
import HoverVisible from "@/components/animation/HoverVisible";
import SectionUp from "@/components/animation/SectionUp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Announcement } from "@/database/Announcement";
import { Flash } from "@/database/Flash";
import { Highlights } from "@/database/Highlights";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

interface Announcement {
  image?: string;
  title: string;
  type: string;
  link: string;
}
interface Highlight {
  image: string;
  title: string;
  link: string;
}
interface Flash {
  image?: string;
  title: string;
  description: string;
  link: string;
}

export default function Home() {
  const announcements: Announcement[] = Announcement();
  const highlights: Highlight[] = Highlights();
  const flashs: Flash[] = Flash();

  return (
    <main className="font-medium">
      <Navbar />
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1 my-10">
        <Carousel className="col-span-2 rounded-lg overflow-hidden max-lg:col-span-1">
          <CarouselContent>
            {highlights.map((item, i) => (
              <CarouselItem key={i}>
                <div className="relative bg-cover bg-center text-white h-[676px] hover:cursor-grab">
                  <img
                    className="object-cover object-center w-full h-full absolute"
                    src={item.image}
                  />
                  <div className="relative p-5 z-10">
                    <HeadlineUp>
                      <h5 className="text-3xl w-1/2 max-lg:w-full">
                        {item.title}
                      </h5>
                    </HeadlineUp>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black opacity-95" />
                  <Link href={item.link} target="_blank">
                    <Button
                      variant={"secondary"}
                      size={"lg"}
                      className="absolute rounded-full bottom-10 right-5 px-10 border border-black"
                    >
                      Selengkapnya
                    </Button>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Right */}
        <div className="space-y-3">
          {announcements.map((item, i) => (
            <Link
              href={item.link}
              className="flex space-x-5"
              target="_blank"
              key={i}
            >
              <img
                className="w-28 h-40 object-cover object-center rounded-lg border border-black"
                src={item.image ?? "/default_image.png"}
                alt="pers-release"
              />
              <div className="space-y-3">
                <Badge variant={"outline"} className="px-3 py-1 border-black">
                  {item.type}
                </Badge>
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Sesi Berita */}
      <SectionUp>
        <KpuNews />
      </SectionUp>
      {/* KPU Flash */}
      <SectionUp>
        <div className="flex justify-between lg:place-items-center mt-20 mb-5 max-lg:flex-col max-lg:space-y-2">
          <h2 className="text-4xl max-lg:text-2xl">KPU Flash</h2>
          <Link
            href={"https://www.kpu.go.id/videos/3/kpu-flash"}
            className="px-3 py-2 border-black border rounded-full text-sm hover:text-white hover:bg-[#771414] hover:border-[#f8a73e] hover:px-5 transition-all ease-linear duration-100 max-lg:w-fit max-lg:py-1"
          >
            Lihat semua
          </Link>
        </div>
        <Carousel>
          <CarouselContent>
            {flashs.map((item, i) => (
              <CarouselItem className="lg:basis-1/4" key={i}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="space-y-3 border-none shadow-none hover:cursor-pointer">
                      <div className="relative h-[30em] rounded-md overflow-hidden">
                        <img
                          src={item.image ?? '/default_image.png'}
                          alt="flash-kpu"
                          className="h-full w-full object-cover"
                        />
                        <HoverVisible>
                          <div className="absolute flex inset-0 opacity-60 bg-black">
                            <PlayCircle
                              size={80}
                              className="fill-white mx-auto my-auto before:invisible after:visible"
                            />
                          </div>
                        </HoverVisible>
                      </div>
                      <p>{item.title}</p>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className=" aspect-video p-10">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.link}?si=e-kVxPogPqXv0hAB&amp;controls=0`}
                      className=" w-full aspect-video"
                    />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </SectionUp>
    </main>
  );
}
