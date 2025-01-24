import React from "react";

import { Routes, Route } from "react-router-dom";


import SignUp from "./components/SignUp";

import SignIn from "./components/SignIn";

import Home from "./components/Home";

function App() {

  return (

    <div>

      <Routes>

        <Route path="/" element={<SignIn />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/home" element={<Home />} />

      </Routes>

    </div>

  );

}

export default App;