import Link from "next/link";

export default function CampaignPage() {
    return(
        <main>
        <div className="w-4/5 h-full flex flex-col ml-40 border-solid border-2 rounded-3xl mt-10 mb-10">
          <div className="m-5 flex flex-col">
            <label>Senin için uygun olan paketi seç</label>
            <label className="text-2xl text-xl">Tahmini başlangıç tarihini seç</label>
          </div>
  
          <div className="w-4/5 h-25 flex flex-col border-solid border-2 rounded-3xl p-2 ml-5 mb-5">
            <label className="ml-5 mb-3 text-blue">Başlangıç tarihini öne çek</label>
            <label className="ml-5 font-semibold">4 Nisan - 6 Nisan 2023</label>
  
            <div className="flex justify-between text-lightgray">
              <label className="ml-5">
              İtici bir güçle kampanyaya başlangıç ver
              </label>
              <label className="mr-3">$5299</label>
            </div>
          </div>
          <div className="w-4/5 h-25 flex flex-col border-solid border-2 rounded-3xl p-2 ml-5 mb-5">
            <label className="ml-5 mb-3 text-blue">Varsayılan sıraya gir</label>
            <label className="ml-5 font-semibold">23 Nisan - 25 Nisan 2023</label>
  
  
            <div className="flex justify-between text-lightgray">
              <label className="ml-5">
                İtici bir güçle kampanyaya başlangıç ver
              </label>
              <label className="mr-3">Ücretsiz</label>
            </div>
          </div>
        </div>
        <div className="mb-10">
        <div>
          <div className="flex justify-end items-center mr-40 mt-10 gap-3">
            <Link href={"/pages/package"}>
              <button className="bg-buttongray w-40 h-10 rounded-xl">
                Geri Dön
              </button>
            </Link>
            <Link href={"/pages/pay"}>
              <button className="bg-blue w-40 h-10 rounded-xl text-white">
                Devam Et
              </button>
            </Link>
          </div>
        </div>
        </div>
      </main>
    )
}