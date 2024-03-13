import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";
import { News, RegionNews } from "@/database/News";

interface News {
  image: string;
  title: string;
  link: string;
  date: string;
}
const KpuNews = () => {
  const news:News[] = News()
  const regionNews:News[] = RegionNews()

  return (
    <div>
      <Tabs className="mt-20" defaultValue="beritaTerkini">
        <TabsList>
          <TabsTrigger value="beritaTerkini">Berita Terkini</TabsTrigger>
          <TabsTrigger value="beritaDaerah">Berita Daerah</TabsTrigger>
        </TabsList>
        {/* Berita Terkini */}
        <TabsContent value="beritaTerkini">
          <div className="flex justify-between lg:place-items-center mb-5 max-lg:flex-col max-lg:space-y-2">
            <h2 className="text-4xl max-lg:text-2xl">
              Informasi Terbaru Mengenai KPU
            </h2>
            <Link
              href={"https://www.kpu.go.id/berita/104/berita-terkini"}
              className="px-3 py-2 border-black border rounded-full text-sm hover:text-white hover:bg-[#771414] hover:border-[#f8a73e] hover:px-5 transition-all ease-linear duration-100 max-lg:w-fit max-lg:py-1"
            >
              Lihat semua
            </Link>
          </div>
          <Carousel>
            <CarouselContent>
              {news.map((item,i)=>(
              <CarouselItem className="lg:basis-1/4">
                <Link href={item.link} target="_blank" key={i}>
                  <Card className="space-y-3 border-none shadow-none">
                    <div className="relative h-56 rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt="berita-terkini"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p>{item.title}</p>
                    <p className="text-muted-foreground text-sm">
                      {new Date(`${item.date}`).toLocaleDateString('en-GB')}
                    </p>
                  </Card>
                </Link>
              </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </TabsContent>
        {/* Berita Daerah */}
        <TabsContent value="beritaDaerah">
          <div className="flex justify-between lg:place-items-center mb-5 max-lg:flex-col max-lg:space-y-2">
            <h2 className="text-4xl max-lg:text-2xl">
              Informasi Terbaru Mengenai KPU di Daerah
            </h2>
            <Link
              href={"https://www.kpu.go.id/berita/105/berita-kpu-daerah"}
              className="px-3 py-2 border-black border rounded-full text-sm hover:text-white hover:bg-[#771414] hover:border-[#f8a73e] hover:px-5 transition-all ease-linear duration-100 max-lg:py-1 max-lg:w-fit"
            >
              Lihat semua
            </Link>
          </div>
          <Carousel>
            <CarouselContent>
              {regionNews.map((item,i)=>(
              <CarouselItem className="lg:basis-1/4" key={i}>
                <Link href={item.link} target="_blank">
                  <Card className="space-y-3 border-none shadow-none">
                    <div className="relative h-56 rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt="berita-terkini"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p>{item.title}</p>
                    <p className="text-muted-foreground text-sm">
                      {new Date(`${item.date}`).toLocaleDateString('en-GB')}
                    </p>
                  </Card>
                </Link>
              </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default KpuNews;
