import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col font-sans">
      <Header />
      <div className="flex flex-1 h-screen">
        <SideBar />
        <main className="bg-gray-400 min-h-full w-full h-full p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
