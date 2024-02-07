import Link from "next/link";
import React from "react";
import RootLayout from "./layout";

export default function HomePage() {
  return (
    <RootLayout showHeader={false}>
    <main  className="">
      <header className="flex items-center justify-center p-5">
        <h1 className="text-3xl text-xxl">makromusic Task</h1>
      </header>
      <hr />
      <div className="flex items-center justify-center">
        <Link href="/pages/fragment">
          <div className="bg-blue mt-9 w-52 h-12 rounded-lg flex items-center justify-center">
            <span className="text-white">Kampanya Oluştur</span>
          </div>
        </Link>
      </div>
    </main>
    </RootLayout>
  );
}
