import React, { useState } from "react";
import Main from "./Main";
import Player from "./Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const url = `https://www.balldontlie.io/api/v1/`;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" url={url} element={<Main />}></Route>
          <Route path="/Player/:id" url={url} element={<Player />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
