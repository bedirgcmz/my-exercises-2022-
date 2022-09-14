import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AnimationRoutes from "./components/AnimationRoutes";
import "./App.css";

export default function App() {
  const [colorButton, setColorButton] = useState(true);
  const [bacgroundOpc, setBackgroundOpc] = useState("bg-opc-dark-brown");
  const [bacgroundDark, setBackgroundDark] = useState("bg-dark-brown");
  const [color, setColor] = useState("cl-dark-brown");
  const [borderBottom, setBorderBottom] = useState("br-btm-dark-brown");

  const getColor = () => {
    if (colorButton) {
      setColorButton(false);
    } else {
      setColorButton(true);
    }
  };
  const getColorBlue = () => {
    setBackgroundOpc("bg-opc-dark-blue");
    setBackgroundDark("bg-dark-blue");
    setColor("cl-dark-blue");
    setBorderBottom("br-btm-dark-blue");
  };

  const getColorBrown = () => {
    setBackgroundOpc("bg-opc-dark-brown");
    setBackgroundDark("bg-dark-brown");
    setColor("cl-dark-brown");
    setBorderBottom("br-btm-dark-brown");
  };

  const getColorOrange = () => {
    setBackgroundOpc("bg-opc-dark-orange");
    setBackgroundDark("bg-dark-orange");
    setColor("cl-dark-orange");
    setBorderBottom("br-btm-dark-orange");
  };

  const getColorMor = () => {
    setBackgroundOpc("bg-opc-dark-blue");
    setBackgroundDark("bg-dark-blue");
    setColor("cl-dark-blue");
    setBorderBottom("br-btm-dark-blue");
  };
  return (
    <div className="bg">
      <Router>
        <Header
          bacgroundOpc={bacgroundOpc}
          setBackgroundOpc={setBackgroundOpc}
          color={color}
          setColor={setColor}
          borderBottom={borderBottom}
          setBorderBottom={setBorderBottom}
          bacgroundDark={bacgroundDark}
        />
        <AnimationRoutes />
      </Router>
      <div className="color-change-container">
        <p>
          <button
            onClick={getColor}
            class={`${bacgroundDark} text-white btn`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            {!colorButton && <i class="fa-solid fa-angles-left"></i>}
            {colorButton && <i class="fa-solid fa-angles-right"></i>}
          </button>
        </p>
        <div style={{ minHeight: "120px" }}>
          <div className="collapse collapse-horizontal" id="collapseWidthExample">
            <div className="card card-body p-2">
              <span onClick={getColorBlue} className="box"></span> <br />
              <span onClick={getColorBrown} className="box"></span> <br />
              <span onClick={getColorOrange} className="box"></span> <br />
              <span onClick={getColorMor} className="box"></span> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
