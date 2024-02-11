import React from "react";

const HeaderComponent = () => {
  return (
    <header className="">
      <div className=" container mx-auto">
      <div className="flex items-center justify-between py-9">
        <div>
          <h1 className="text-3xl text-xl ">Kampanya Oluştur</h1>
        </div>

        <div className="flex gap-8 items-center justify-center ">
          <a href="#" className="text-lightgray hover:text-gray-700">
            Parçan
          </a>
          <a href="#" className="text-lightgray hover:text-gray-700">
            Bölge
          </a>
          <a href="#" className="text-lightgray hover:text-gray-700">
            Kampanyan
          </a>
          <a href="#" className="text-lightgray hover:text-gray-700">
            Ödeme
          </a>
        </div>

        <div className="w-[200px]"></div>
        
      </div>
      </div>
      <hr />
    </header>
  );
};

export default HeaderComponent;
