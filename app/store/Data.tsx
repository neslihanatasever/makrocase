import { create } from "zustand";

export const useStore = create((set) => ({
  create_campaign: {
    id: 4,
    track_id: null,
    genres: null,
    region: null,
    package: null,
    start_date: null,
  },
  get_campaign: {
    id: 4,
    campaign_data: {
      track_id: "spotify_uri",
      genres: ["Hip Hop", "Rap"],
      region: "US",
      package: "1",
      start_date: "1",
    },
  },
  get_package: [
    {
      id: "1",
      name: "Listelere Oyna",
      click: 5000,
      price: 1000,
      description: "İtici bir güçle kampanyana başlangıç ver",
      currency: "TRY",
    },
    {
      id: "2",
      name: "Listelere Oyna",
      click: 10000,
      price: 2000,
      description: "İtici bir güçle kampanyana başlangıç ver",
      currency: "TRY",
    },
    {
      id: "3",
      name: "Listelere Oyna",
      click: 5000,
      price: 300,
      description: "İtici bir güçle kampanyana başlangıç ver",
      currency: "USD",
    },
    {
      id: "4",
      name: "Listelere Oyna",
      click: 15000,
      price: 3000,
      description: "İtici bir güçle kampanyana başlangıç ver",
      currency: "TRY",
    },
  ],
  track_genres: ["pop", "rock", "jazz"],
}));
