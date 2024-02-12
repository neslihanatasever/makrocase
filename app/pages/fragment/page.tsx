"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import debounce from "lodash.debounce";

const FragmentPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSong, setSelectedSong] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false); 

  const debouncedFetchData = debounce(async () => {
    try {
      const response = await axios.get(
        `https://makromusic-web-task-api.onrender.com/search-on-spotify?q=${searchInput}`
      );
      if (response.status === 200) {
        console.log(response.data);
        setSearchResults(response.data);
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, 500);

  useEffect(() => {
    debouncedFetchData();
  }, [searchInput]);

  useEffect(() => {
    const storedSong = localStorage.getItem("selectedSong");
    if (storedSong) {
      setSelectedSong(storedSong);
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem("selectedSong", selectedSong);
  }, [selectedSong]); 

  const handleItemClick = (itemName: string) => {
    setSelectedSong(itemName);
    setIsInputFocused(false);
  };

  return (
    <main className="container mx-auto ">
      <div className="w-full min-h-52 flex flex-col border-solid border-2 rounded-3xl mt-24 ">
        <div className="m-5 flex flex-col">
          <label className="font">Parçanı Seç</label>
          <label className="text-lightgray">
            Kampanyayı oluşturmak istediğin parçayı seç
          </label>
        </div>

        <div className="ml-4 mr-4">
          <input
            
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setTimeout(() => setIsInputFocused(false), 200)}
            type="text"
            className="w-full h-10 border-solid border-2 rounded-xl pl-3"
            placeholder="Spotify'da Ara..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log("Enter key pressed");
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />

          <p className="ml-1 mt-2 text-md ">
           Seçtiğiniz Şarkı:  {selectedSong }
          </p>
          

          {isInputFocused && (
          <ul className="h-[200px] overflow-auto m-2 custom">
            {searchResults.tracks?.items?.map((item: any, index: any) => (
              <li
                className={`p-2 border-b border-[#b8b6b6] ${
                  selectedSong === item.name ? "bg-[#279e2d] text-[#fff]" : ""
                }`}
                onClick={() => handleItemClick(item.name)}
                key={index}
              >
                {item.name}
              </li>
            ))}
          </ul>
          )}
        </div>

        <div className="flex items-center mt-4 ml-5 mb-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label className="ml-2 mb-1">Parçam Yayında Değil</label>
        </div>
      </div>
      <div>
        <div className="flex justify-end items-center mt-10 gap-3">
          <Link href={"/"}>
            <button className="bg-buttongray w-40 h-10 rounded-xl">
              Geri Dön
            </button>
          </Link>
          <Link href={"/pages/region"}>
            <button className="bg-blue w-40 h-10 rounded-xl text-white">
              Devam Et
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default FragmentPage;
