import { Route, Routes } from "react-router-dom";
import { RoutesPath } from "../src/constants/index";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import Users from "./views/Users/Users";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path={RoutesPath.HOME} element={<Home />} />
        <Route path={RoutesPath.USERS} element={<Users />} />
        <Route path={RoutesPath.CONTACT} element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
