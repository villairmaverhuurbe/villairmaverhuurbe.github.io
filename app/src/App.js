// import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Sluis from "./Sluis";

function App() {
  return <Home/>
  // const currentPath = window.location.href;
  // return currentPath.indexOf("sluis") > 0 ? <Sluis /> : <Home />;
  // <BrowserRouter>
  //   <Routes>
  //     < Route exact path="/" Component={Home}/>
  //     < Route exact path="/sluis" Component={Sluis}/>
  //   </Routes>
  // </BrowserRouter>
}

export default App;
