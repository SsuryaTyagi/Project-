import React from "react";
import { Route, Routes } from "react-router-dom";
import Class17 from "./assets/component/class/Class17";
import Class16 from "./assets/component/class/class16";
import Task3 from "./assets/component/class/Task3";
import LoginRegister from "./assets/component/class/Form";
import CircularText from "./assets/component/class/class19/ReactBit";
import Navbar from "./assets/component/Navbar";
const App = () => {
  return (
    <>
<div className="w-full h-full">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Class16 />} />
        <Route path="/card" element={<Task3 />} />
        <Route path="/form" element={<LoginRegister />} />
        <Route
          path="/bit"
          element={
            <CircularText
              text="REACT BIT * MY PROJECT * "
              spinDuration={20}
              onHover="speedUp"
            />
          }
        />
      </Routes>
</div>
    </>
  );
};

export default App;
