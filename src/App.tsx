import {Routes, Route} from "react-router-dom";
import Home from "./views/Home/Home";
import Users from "./views/Users/Users";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index path="/" element={<Home />} />
        {/* nie powinno się dawac 2 takich samych comoponentow  */}
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
};

export default App;
