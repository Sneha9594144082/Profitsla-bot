import { Route, Routes } from 'react-router-dom';
import './App.css';

import Activebot from "./Components/Activebot";
import Login from "./Components/Login";
import Order from "./Components/Order";
import Report from "./Components/Report";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/active" exact element={<Activebot />} />
        <Route path="/order" exact element={<Order />} />
        <Route path="/report" exact element={<Report />} />
      </Routes>
    </>
  );
}

export default App;
