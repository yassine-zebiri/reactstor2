import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import './App.css';
import Admin from "./pages/admin/admin";
import Dashboard from "./pages/admin/pages/dashborad";
import Card from "./pages/card/card";
import { Error } from "./pages/error/error";
import { Home } from "./pages/home/home";
import redux from "./redux/redux";

export default function App(){
  return(
    <BrowserRouter >
    <Provider store={redux}>
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/admin/dashboard" element={<Dashboard/>} />
      <Route path="/card" element={<Card/>} />
      <Route path="*" exect element={<Error/>} />
    </Routes>
    </Provider>
    </BrowserRouter>
  )
}