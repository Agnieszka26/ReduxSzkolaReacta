import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./features/home/Home";
import Users from "./features/users/Users";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route index path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
