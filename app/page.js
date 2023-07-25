"use client";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Title from "./components/Title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container min-h-max m-10 p-3">
        <Title />
        <div className="main flex">
          <Sidebar />
          <Content />
        </div>
      </div>
    </main>
  );
}
