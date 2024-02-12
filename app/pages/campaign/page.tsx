"use client";
import Link from "next/link";
import { useStore } from "../../store/Data";

export default function CampaignPage() {
  const campaign = useStore((state) => state.get_date);
  const get_campaign = useStore((state) => state.get_campaign);

  // Ay ismini getirmek için yardımcı fonksiyon
  function getMonthName(monthIndex) {
    const months = [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık"
    ];
    return months[monthIndex];
  }

  return (
    <main className="container mx-auto">
      <div className="w-full h-full flex flex-col border-solid border-2 rounded-3xl mt-10 px-5 mb-10">
        <div className="m-5 flex flex-col">
          <label>Senin için uygun olan paketi seç</label>
          <label className="text-2xl text-xl">
            Tahmini başlangıç tarihini seç
          </label>
        </div>
        {campaign.map((campa, index) => {
          // Tarih aralığını al
          const startDate = new Date(campa.date_range[0]);
          const endDate = new Date(campa.date_range[1]);

          // Tarihleri biçimlendir
          const formattedStartDate = `${startDate.getDate()} ${getMonthName(startDate.getMonth())} ${startDate.getFullYear()}`;
          const formattedEndDate = `${endDate.getDate()} ${getMonthName(endDate.getMonth())} ${endDate.getFullYear()}`;

          // Tarih aralığı dizesini oluştur
          const dateRangeString = `${formattedStartDate} - ${formattedEndDate}`;

          return (
            <div key={campa.id} className="w-full h-25 flex flex-col border-solid border-2 rounded-3xl p-2 mb-5">
              <label className="ml-5 mb-3 text-blue">{campa.name}</label>
              <label className="ml-5 font-semibold">
                {dateRangeString}
              </label>

              <div className="flex justify-between text-lightgray">
                <label className="ml-5">{campa.description}</label>
                <label className="mr-3">
                  {get_campaign.campaign_data.region === "US" ? campa.price * 0.03 : campa.price}
                  {get_campaign.campaign_data.region === "US" ? "$" : "₺"}
                  
                </label>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mb-10">
        <div>
          <div className="flex justify-end items-center mt-10 gap-3">
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
  );
}
