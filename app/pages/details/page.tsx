import HeaderComponent from "@/app/components/headercomp/page";
import React from "react";

export default function DetailsPage() {
  return (
    <main>
      <HeaderComponent />
      <div className="w-4/5 h-52 flex flex-col ml-40 border-solid border-2 rounded-3xl mt-24">
        <div className="m-5 flex flex-col">
          <label className="font">Parçanı Seç</label>
          <label className="text-lightgray">
            Kampanyayı oluşturmak istediğin parçayı seç
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
    </main>
  );
}
