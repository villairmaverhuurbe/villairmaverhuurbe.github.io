// import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Sluis from "./Sluis";
import Vlam from "./Vlam";

function App() {
  // return <Sluis/>
  const currentPath = window.location.href;
  return currentPath.indexOf("sluis") > 0 ? <Sluis /> : currentPath.indexOf("vlam") > 0 ? <Vlam/> : <Home />;
  // <BrowserRouter>
  //   <Routes>
  //     < Route exact path="/" Component={Home}/>
  //     < Route exact path="/sluis" Component={Sluis}/>
  //     < Route exact path="/vlam" Component={Vlam}/>
  //   </Routes>
  // </BrowserRouter>
}

export default App;
