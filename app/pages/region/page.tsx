import Link from "next/link";
import React from "react";

export default function DetailsPage() {
  return (
    <main className="container mx-auto">
      <div className="w-full min-h-40 flex flex-col  border-solid border-2 rounded-3xl mt-10 ">
        <div className="m-5 flex flex-col">
          <label className="font">Bölgeni Seç</label>
          <label className="text-lightgray">
            Kampanyayı yayınlamak istediğin bölgeyi seç
          </label>
        </div>

        <div className="grid grid-cols-2 gap-2 w-full  ">
          <div>
            <input className="hidden" id="radio_1" type="radio" name="radio" />
            <label
              className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
              htmlFor="radio_1"
            >
              Türkiye 
            </label>
          </div>



          <div>
            <input className="hidden" id="radio_2" type="radio" name="radio" />
            <label
              className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
              htmlFor="radio_2"
            >
              Global
              </label>
          </div>
        </div>
        </div>

      <div className="h-40 flex flex-col border-solid border-2 rounded-3xl mt-10">
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
