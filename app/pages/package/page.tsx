"use client";
import ButtonComponent from "@/app/components/buttoncomp/page";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useStore } from "../../store/Data";
export default function CampaignPage() {
  const packages = useStore((state) => state.get_package);
  const get_campaign = useStore((state) => state.get_campaign);
  const [highestPriceIndex, setHighestPriceIndex] = useState(0);

  useEffect(() => {
    let highestPrice = packages[0].price;
    let highestIndex = 0;

    // Find the index of the package with the highest price
    packages.forEach((pack, index) => {
      if (pack.price > highestPrice) {
        highestPrice = pack.price;
        highestIndex = index;
      }
    });

    setHighestPriceIndex(highestIndex);
  }, [packages]);
  return (
    <main className="container mx-auto">
      <div className="w-full h-full flex flex-col  border-solid border-2 rounded-3xl mt-10 mb-10 px-5">
        <div className="m-5 flex flex-col">
          <label>Senin için uygun olan paketi seç</label>
        </div>

        {packages.map((pack, index) => (
          <div className="">
            <input
              className="hidden"
              id={`radio_${index + 1}`}
              type="radio"
              name="radio"
              checked={index === highestPriceIndex}
            />
            <label
              className="w-full h-25 flex flex-col border-solid border-2 rounded-3xl p-2 mb-5 "
              htmlFor={`radio_${index + 1}`}
            >
              <label className="ml-5 mb-3 text-blue">{pack.name}</label>
              <label className="ml-5 font-semibold">{pack.click} Tıklama</label>

              <div className="flex justify-between text-lightgray">
                <label className="ml-5">{pack.description}</label>
                <label className="mr-3">
                  {get_campaign.campaign_data.region == "US"
                    ? pack.price * 0.03
                    : pack.price}
                  {get_campaign.campaign_data.region == "US" ? "$" : "₺"}
                </label>
              </div>
            </label>
          </div>
        ))}
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
