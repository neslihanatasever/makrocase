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
            track_id: 'spotify_uri',
            genres: ["Hip Hop", "Rap"],
            region: 'US',
            package: '1',
            start_date: '1',
        }
    },
    get_package: [
        {
            id: '1',
            name: 'Listelere Oyna',
            click: 5000,
            price: 1000,
            description: 'İtici bir güçle kampanyana başlangıç ver',
            currency: 'TRY'
        }
    ],
    track_genres:['pop', 'rock', 'jazz'],
    
}));
