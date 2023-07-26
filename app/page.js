"use client";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Title from "./components/Title";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import EducationReducer from './store/Education';

const store = configureStore({
  reducer : {
    education : EducationReducer
  }
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Provider store={store}>
        <Navbar />
        <div className="mainpage min-h-max m-10 p-3">
          <Title />
          <div className="main flex">
            <Sidebar />
            <Content />
          </div>
        </div>
      </Provider>
    </main>
  );
}
