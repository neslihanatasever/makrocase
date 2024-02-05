import React from "react";

const FragmentPage = () => {
  return (
    <main className="">
      <header className="flex items-center justify-between p-9">
        <div>
          <h1 className="text-3xl text-xl ml-32">Kampanya Oluştur</h1>
        </div>

        <div className="flex gap-8 items-center justify-center flex-grow mr-96">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Parçan
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Detaylar
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Kampanyan
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Ödeme
          </a>
        </div>
      </header>
      <hr />

      <div className="w-4/5 h-52 flex ml-32 border-solid border-2 rounded-3xl">
        <div className="">
          <h4>Parçanı Seç</h4>
          <h3>Kampanyayı oluşturmak istediğin parçayı seç</h3>
        </div>
      </div>
      
    </main>
  );
};

export default FragmentPage;
