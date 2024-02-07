import React from "react";
import ButtonComponent from "../../components/buttoncomp/page";
import Link from "next/link";

const FragmentPage = () => {
  return (
    <main className="">
      <div className="w-4/5 h-52 flex flex-col ml-40 border-solid border-2 rounded-3xl mt-24">
        <div className="m-5 flex flex-col">
          <label className="font">Parçanı Seç</label>
          <label className="text-lightgray">
            Kampanyayı oluşturmak istediğin parçayı seç
          </label>
        </div>

        <div className="ml-4">
          <input
            type="text"
            className="w-[90%] h-10 border-solid border-2 rounded-xl pl-3"
            placeholder="Spotify'da Ara..."
          />
        </div>

        <div className="flex items-center mt-4 ml-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label className="ml-2 mb-1">Parçam Yayında Değil</label>
        </div>
      </div>
      <ButtonComponent />
    </main>
  );
};

export default FragmentPage;
