"use client";
import TagInput from "@/app/components/tagInput";
import Link from "next/link";
import React, { useEffect } from "react";
import { useStore } from "@/app/store/Data";

export default function DetailsPage() {

  const region = useStore(state => state.get_campaign)
  return (
    <main className="container mx-auto  ">
      <div className="w-full min-h-40 flex flex-col border-solid border-2 rounded-3xl mt-10 ">
        <div className="m-5 flex flex-col">
          <label className="font">Bölgeni Seç</label>
          <label className="text-lightgray">
            Kampanyayı yayınlamak istediğin bölgeyi seç
          </label>
        </div>

        <div className="grid grid-cols-2 gap-2 w-full mb-5 ">
          <div>
            <input className="hidden" id="radio_1" type="radio" name="radio"/>
            <label
              className="flex flex-col border-2 rounded-xl border-green cursor-pointer h-10 px-2 ml-4 justify-center "
              htmlFor="radio_1"
            >
              Türkiye
            </label>
          </div>
          <div>
            <input className="hidden" id="radio_2" type="radio" name="radio"/> 
            <label
              className="flex flex-col *:border-solid border-2 rounded-xl  cursor-pointer h-10 px-2 mr-4 justify-center"
              htmlFor="radio_2"
            >
              Global
              </label>
          </div>
        </div>
        </div>

      <div className="min-h-40 flex flex-col border-solid border-2 rounded-3xl mt-10">
        <div className="m-5 flex flex-col">
          <label className="font">Parçanın türünü seç</label>
          <label className=" text-lightgray">
            Seçtiğin parçanın türünü belirle
          </label>
        </div>

        <div className=" mb-5">
          <TagInput />
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

