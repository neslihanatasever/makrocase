import ButtonComponent from "@/app/components/buttoncomp/page";
import HeaderComponent from "@/app/components/headercomp/page";
import Link from "next/link";
import React from "react";

export default function DetailsPage() {
  return (
    <main>
      <div className="w-4/5 h-40 flex flex-col ml-40 border-solid border-2 rounded-3xl mt-10">
        <div className="m-5 flex flex-col">
          <label className="font">Bölgeni Seç</label>
          <label className="text-lightgray">
            Kampanyayı yayınlamak istediğin bölgeyi seç
          </label>
        </div>

        <div className="flex ml-5 gap-5">
          <div className=" flex justify-start items-start">
              <button
                type="button"
                className="w-96 h-9 border-solid border-2 rounded-lg">
                <label className="flex pl-5">Türkiye</label>
              </button>
          </div>
          <div className=" flex justify-start items-start">
              <button
                type="button"
                className="w-96 h-9 border-solid border-2 rounded-lg">
                <label className="flex pl-5">Global</label>
              </button>
          </div>
        </div>
      </div>

      <div className="w-4/5 h-40 flex flex-col ml-40 border-solid border-2 rounded-3xl mt-10">
        <div className="m-5 flex flex-col">
          <label className="font">Parçanın türünü seç</label>
          <label className="text-lightgray">
            Seçtiğin parçanın türünü belirle
          </label>
        </div>

        <div className="ml-4">
          <input
            type="text"
            className="w-[90%] h-10 border-solid border-2 rounded-xl pl-3"
            placeholder="Spotify'da Ara..."
          />
        </div>
      </div>
      <div>
        <div className="flex justify-end items-center mr-40 mt-10 gap-3">
          <Link href={"/pages/fragment"}>
            <button className="bg-buttongray w-40 h-10 rounded-xl">
              Geri Dön
            </button>
          </Link>
          <Link href={"/pages/package"}>
            <button className="bg-blue w-40 h-10 rounded-xl text-white">
              Devam Et
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
