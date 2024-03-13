import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#771414] rounded-t-lg text-white">
      <div className="grid grid-cols-3 gap-3 p-10 text-sm font-normal max-lg:grid-cols-2">
        <div>
          <h3 className="font-semibold my-3">Hubungi</h3>
          <div className="flex space-x-5 place-items-center">
            <Link href={"https://www.kpu.go.id/page/read/100/kontak"}>
              Kontak Kami
            </Link>
            <Link href={"https://www.kpu.go.id/page/read/564/kotak-pengaduan"}>
              Kotak Pengaduan
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold my-3">Sosial Media</h3>
          <div className="grid grid-cols-3 gap-1 max-lg:grid-cols-2">
            <Link href={"https://www.facebook.com/KPURepublikIndonesia"}>
              Facebook
            </Link>
            <Link href={"https://twitter.com/KPU_ID"}>Twitter</Link>
            <Link
              href={"https://www.youtube.com/channel/UCVdSz86o9q2cQKvAQ5QhOYg"}
            >
              Youtube
            </Link>
            <Link href={"https://www.instagram.com/kpu_ri/"}>Instagram</Link>
            <Link href={"https://www.tiktok.com/@kpu_ri?lang=en"}>Tiktok</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold my-3">Alamat</h3>
          <p>
            Jl. Imam Bonjol No.29, RT.8/RW.4, Menteng, Kec. Menteng, Kota
            Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310
          </p>
        </div>
      </div>
      <p className="text-center text-sm py-2">
        Copyright © 2024{" "}
        <Link
          href={"https://raybrilliant.pages.dev"}
          className="hover:text-orange-500 font-semibold mx-1"
        >
          Raybrilliant
        </Link>{" "}
        <span className="animate-pulse">💙</span>
      </p>
    </div>
  );
};

export default Footer;
