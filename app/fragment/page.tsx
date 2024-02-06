import React from "react";

const FragmentPage = () => {
  return (
    <main className="">
      <div className="flex items-center justify-between p-9">
        <div>
          <h1 className="text-3xl text-xl ml-32">Kampanya Oluştur</h1>
        </div>

        <div className="flex gap-8 items-center justify-center flex-grow mr-96">
          <a href="#" className="text-lightgray hover:text-gray-700">
            Parçan
          </a>
          <a href="#" className="text-lightgray hover:text-gray-700">
            Detaylar
          </a>
          <a href="#" className="text-lightgray hover:text-gray-700">
            Kampanyan
          </a>
          <a href="#" className="text-lightgray hover:text-gray-700">
            Ödeme
          </a>
        </div>
      </div>
      <hr />

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

      <div className="flex justify-end items-center mr-40 mt-10 gap-3">
        <button className="bg-buttongray w-40 h-10 rounded-xl">Geri Dön</button>
        <button className="bg-blue w-40 h-10 rounded-xl text-white">
          Devam Et
        </button>
      </div>
    </main>
  );
};

export default FragmentPage;
