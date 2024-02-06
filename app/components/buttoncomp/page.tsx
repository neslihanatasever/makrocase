import React from "react";

export default function ButtonComponent() {
  return (
    <div className="flex justify-end items-center mr-40 mt-10 gap-3">
      <button className="bg-buttongray w-40 h-10 rounded-xl">Geri Dön</button>
      <button className="bg-blue w-40 h-10 rounded-xl text-white">
        Devam Et
      </button>
    </div>
  );
}
