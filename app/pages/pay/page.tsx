export default function PayPage() {
  return (
    <main className="container mx-auto mt-10  mb-10">
     <div className=" ml-[-2] ">
     <div className="text-3xl text-bold p-5">
        <h1>Onayla ve ödemeye geç</h1>
      </div>
      <hr />
      <div className="flex gap-16 mt-5">
        <div className="w-[60%] h-full flex flex-col">
          <div className="text-xl text-bold p-5">
            <h2>Kampanya özetin</h2>
          </div>

          <div className="flex flex-col  gap-">
            <div className="flex justify-between">
              <div className="flex flex-col mb-2">
                <label className="ml-5 mb-3 text-lightgray">Tıklanma</label>
                <label className="ml-5 font-semibold">10.000 Tıklanma</label>
              </div>
              <div>
                <label className="ml-5 font-semibold text-lightgray">
                  Düzenle
                </label>
              </div>
            </div>

            <div className=" flex justify-between">
              <div className="flex flex-col  ">
                <label className="ml-5 mb-3 text-lightgray">
                  Başlangıç Tarihi
                </label>
                <label className="ml-5 font-semibold">
                  4 Nisan - 6 Nisan 2023
                </label>
              </div>
              <div>
                <label className="ml-5 font-semibold text-lightgray">
                  Düzenle
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%]  border-solid border-2 rounded-3xl">
          <div className="p-5 text-lightgray text-md ">
            <h3>Kampanya Özetin</h3>
          </div>
          <div className="mb-5">
            <hr />
          </div>
          <div className="border-solid border-2 rounded-3xl flex justify-between mr-7 ml-7">
            <img src="" alt="" className="w-[20px] h-[20px] rounded-lg" />
            <div className="">
              <p className="text-bold text-md font-semibold">
                Kaygılarım kutsal kitap gibi
              </p>
              <p className="text-lightgray">kurkafanda</p>
            </div>
            <div></div>
            <div></div>
          </div>

          <div className="ml-7 mt-7">
            <label className=" font-semibold text-xl">Ödeme Detayları</label>
          </div>

          <div className=" flex justify-between m-7 ">
            <div className="flex flex-col  ">
              <label className="">Başlangıç Tarihi</label>
            </div>
            <div>
              <label className=" font-semibold">2399$</label>
            </div>
          </div>

          <hr />

          <div className=" flex justify-between m-7 mb-[-2px]">
            <div className="flex flex-col  ">
              <label className=" mb-3">Başlangıç Tarihi</label>
            </div>
            <div>
              <label className=" font-semibold ">2399$</label>
            </div>
          </div>

          <button className="bg-blue w-[30vw] h-10 rounded-xl text-white ml-6 mt-6 mb-5">
            Ödemeye Geç
          </button>
        </div>
      </div>
     </div>
    </main>
  );
}
