import React from "react";
import Login from "./components/login";
import Page from "./components/Page";
import Dashboard from "./components/Dashboard";
import PageDetails from "./components/PageDetails";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/page/:id" element={<Page />}></Route>
        <Route path="PageDetails" element={<PageDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
