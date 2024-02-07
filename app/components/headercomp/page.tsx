import React from "react";

const HeaderComponent = () => {
  return (
    <header>
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
    </header>
  );
};

export default HeaderComponent;
