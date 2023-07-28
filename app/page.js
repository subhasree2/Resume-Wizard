"use client";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Title from "./components/Title";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import EducationReducer from './store/Education';
import ProjectReducer from './store/Project';
import linkReducer from './store/Links';
import skillReducer from './store/Skills';

const store = configureStore({
  reducer : {
    education : EducationReducer,
    project : ProjectReducer,
    link : linkReducer,
    skill : skillReducer
  }
});

export default function Home() {
  return (
    <main className="flex flex-col">
      <Provider store={store}>
        <Navbar />
        <div className="mainpage m-10 p-3 w-[90%] ml-auto mr-auto">
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
