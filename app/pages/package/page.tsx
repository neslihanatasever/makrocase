import ButtonComponent from "@/app/components/buttoncomp/page";
import Link from "next/link";
import React from "react";

export default function CampaignPage() {
  return (
    <main>
      <div className="w-4/5 h-full flex flex-col ml-40 border-solid border-2 rounded-3xl mt-10 mb-10">
        <div className="m-5 flex flex-col">
          <label>Senin için uygun olan paketi seç</label>
        </div>

        <div className="w-4/5 h-25 flex flex-col border-solid border-2 rounded-3xl p-2 ml-5 mb-5">
          <label className="ml-5 mb-3 text-blue">Listelere Oyna</label>
          <label className="ml-5 font-semibold">15.000 tıklanma</label>


          <div className="flex justify-between text-lightgray">
            <label className="ml-5">
              İtici bir güçle kampanyaya başlangıç ver
            </label>
            <label className="mr-3">$4355</label>
          </div>
        </div>
        <div className="w-4/5 h-25 flex flex-col border-solid border-2 rounded-3xl p-2 ml-5 mb-5">
          <label className="ml-5 mb-3 text-blue">Listelere Oyna</label>
          <label className="ml-5 font-semibold">15.000 tıklanma</label>


          <div className="flex justify-between text-lightgray">
            <label className="ml-5">
              İtici bir güçle kampanyaya başlangıç ver
            </label>
            <label className="mr-3">$4355</label>
          </div>
        </div>
        <div className="w-4/5 h-25 flex flex-col border-solid border-2 rounded-3xl p-2 ml-5 mb-5">
          <label className="ml-5 mb-3 text-blue">Listelere Oyna</label>
          <label className="ml-5 font-semibold">15.000 tıklanma</label>


          <div className="flex justify-between text-lightgray">
            <label className="ml-5">
              İtici bir güçle kampanyaya başlangıç ver
            </label>
            <label className="mr-3">$4355</label>
          </div>
        </div>
        <div className="w-4/5 h-25 flex flex-col border-solid border-2 rounded-3xl p-2 ml-5 mb-5">
          <label className="ml-5 mb-3 text-blue">Listelere Oyna</label>
          <label className="ml-5 font-semibold">15.000 tıklanma</label>


          <div className="flex justify-between text-lightgray">
            <label className="ml-5">
              İtici bir güçle kampanyaya başlangıç ver
            </label>
            <label className="mr-3">$4355</label>
          </div>
        </div>
      </div>
      <div className="mb-10">
      <div>
        <div className="flex justify-end items-center mr-40 mt-10 gap-3">
          <Link href={"/pages/region"}>
            <button className="bg-buttongray w-40 h-10 rounded-xl">
              Geri Dön
            </button>
          </Link>
          <Link href={"/pages/campaign"}>
            <button className="bg-blue w-40 h-10 rounded-xl text-white">
              Devam Et
            </button>
          </Link>
        </div>
      </div>
      </div>
    </main>
  );
}
