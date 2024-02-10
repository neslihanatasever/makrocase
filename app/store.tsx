// store.ts
import create from 'zustand';

interface Campaign {
  id: number;
  track_id: string | null;
  genres: string[] | null;
  region: string | null;
  package: string | null;
  start_date: string | null;
}

interface Package {
  id: string;
  name: string;
  click: number;
  price: number;
  description: string;
  currency: string;
}

interface useStoreState {
  campaigns: Campaign[];
  packages: Package[];
  trackGenres: string[];
  fetchCampaigns: () => Promise<void>;
  fetchPackages: () => Promise<void>;
  fetchTrackGenres: () => Promise<void>;
}

const useStore = create<useStoreState>((set) => ({
  campaigns: [],
  packages: [],
  trackGenres: [],
  fetchCampaigns: async () => {
    try {
      const response = await fetch('https://makromusic-web-task-api.onrender.com/get-campaigns');
      const campaigns = await response.json();
      set({ campaigns });
    } catch (error) {
      console.error('Error fetching campaigns:', error);
    }
  },
  fetchPackages: async () => {
    try {
      const response = await fetch('https://makromusic-web-task-api.onrender.com/get-packages');
      const packages = await response.json();
      set({ packages });
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  },
  fetchTrackGenres: async () => {
    try {
      const response = await fetch('https://makromusic-web-task-api.onrender.com/track-genres');
      const trackGenres = await response.json();
      set({ trackGenres });
    } catch (error) {
      console.error('Error fetching track genres:', error);
    }
  },
}));

export default useStore;
