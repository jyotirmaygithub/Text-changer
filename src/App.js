import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Description from "./components/TextForm";
import React, { useState } from "react";
import Aboutus from "./components/About"; //i will gonna use it later
// short from of react functional components is rfc, it is needy to make a folder or page or a components

// lets learn another important concept of react is routers which will help us to not to reload the pages of the website again and again
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [modename, setmodename] = useState("Enable Dark mode");
  const [modetextcolor, setmodetextcolor] = useState({
    color: "black",
  });
  const [alert, setalert] = useState(null);

  function timer() {
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  function functiontochangecolor(check) {
    if (mode === "light") {
      setmode("dark");
      setmodename("Enable Light mode");
      document.body.style.backgroundColor = "#AAB7B8";
      setalert({
        type: "success : ",
        msg: "Enabled Dark mode",
      });
      document.title = "Text - Dark mode";
      timer();
    } else {
      setmode("light");
      setmodename(" Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      setalert({
        type: "success : ",
        msg: "Enabled Light mode",
      });
      document.title = "Text -Light mode";
      timer();
    }
    if (modetextcolor.color === "black") {
      setmodetextcolor({
        color: "white",
      });
    } else {
      setmodetextcolor({
        color: "black",
      });
    }
  }
  return (
    <>
    {/* for the functioning of router concept you need to use routes and route  */}
    {/* remember code with harry course is one year old, thats why some of the concepts are depricated*/}
    {/* concept of switch is depricated  */}
    {/* you need to use elements only then you will be able to link pages */}

    {/* noted : using exact keyword with paths is very important to render exact page where we want to go */}
      <Router>
        <Navbar
          title="Hustler_coder"
          description="About us"
          colormode={mode}
          tochangecolor={functiontochangecolor}
          modename={modename}
          coloroftext={modetextcolor}
        />
        <Alert defaultalert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<Aboutus aboutuscolor ={mode} />}></Route>
            <Route
              exact path="/"
              element={
                <Description
                  heading="Write your text here with full stop"
                  colormode2={mode}
                  defaultalert={setalert}
                  removealert={timer}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

// react is little bit differenct till now whatever i learn
// it has props, components and static methods which make it different from javascript
// javascript is simple in writing
