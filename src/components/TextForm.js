import React, { useState } from "react";

// now i am going to use hocks and state concepts of react

export default function TextForm(props) {
  const [Text, setText] = useState("");
  // newText = ("why you want to write something here")

  function cleartext() {
    let cleartext = "";
    setText(cleartext);
    props.defaultalert({ type: "success : ", msg: "Text cleard" });
    props.removealert();
  }

  function onewordcapital() {
    let oneword = Text.split(" ");
    let newstring = [];
    oneword.forEach((each) => {
      let word = each.charAt(0).toUpperCase();
      let anotherword = each.slice(1);
      let plus = word + anotherword;
      newstring.push(plus);
    });
    setText(newstring.join(" "));
    props.defaultalert({ type: "success : ", msg: "One word Capitalized" });
    props.removealert();
  }
  function onewordofsentence() {
    let oneword = Text.toLowerCase().split(". ");
    let newstring = [];
    oneword.forEach((sentence) => {
      let letter = sentence.charAt(0).toUpperCase();
      let restsentence = sentence.slice(1);
      let joiner = letter + restsentence;
      newstring.push(joiner);
    });
    setText(newstring.join(". "));
    props.defaultalert({ type: "success : ", msg: "One word of a sentence" });
    props.removealert();
  }
  function Touppercase() {
    let newtext = Text.toUpperCase();
    setText(newtext);
    props.defaultalert({
      type: "success : ",
      msg: "Every letter converted into uppercase",
    });
    props.removealert();
  }
  function Tolowercase() {
    let lowertext = Text.toLowerCase();
    setText(lowertext);
    props.defaultalert({
      type: "success : ",
      msg: "Every letter converted into lowercase",
    });
    props.removealert();
  }
  function copytoclip() {
    navigator.clipboard.writeText(Text);
    props.defaultalert({ type: "success : ", msg: "Copy to clipboard!" });
    props.removealert();
  }
  function ateverychange(event) {
    setText(event.target.value);
  }
  // console.log(props.colormode2)
  // these above function i am using to do some change on the visual screen
  // we can use set state to change the existing state of the page
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.colormode2 === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control mb-3"
            placeholder={props.heading}
            value={Text}
            onChange={ateverychange}
            id="textarea"
            rows="8"
            style={{
              backgroundColor:
                props.colormode2 === "light" ? "white" : "#AAB7B8",
              color: props.colormode2 === "light" ? "black" : "white",
            }}
          ></textarea>
          <button
            disabled={Text.length === 0}
            type="button"
            onClick={Touppercase}
            className="btn btn-secondary mx-1"
          >
            Uppercase Convertor
          </button>
          <button
            disabled={Text.length === 0}
            type="button"
            onClick={Tolowercase}
            className="btn btn-secondary mx-1 my-1"
          >
            Lowercase Convertor
          </button>
          <button
            disabled={Text.length === 0}
            type="button"
            onClick={cleartext}
            className="btn btn-secondary mx-1 my-1"
          >
            Clear Text
          </button>
          <button
            disabled={Text.length === 0}
            type="button"
            onClick={onewordcapital}
            className="btn btn-secondary mx-1 my-1"
          >
            One Word capital
          </button>
          <button
            disabled={Text.length === 0}
            type="button"
            onClick={onewordofsentence}
            className="btn btn-secondary mx-1 my-1"
          >
            One Word in sentence
          </button>
          <button
            disabled={Text.length === 0}
            type="button"
            onClick={copytoclip}
            className="btn btn-secondary mx-1  my-1"
          >
            Copy Text
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1 style={{ color: props.colormode2 === "light" ? "black" : "white" }}>
          Text summary
        </h1>
        <p style={{ color: props.colormode2 === "light" ? "black" : "white" }}>
          {
            Text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          } words and {Text.length} characters
        </p>
        <p style={{ color: props.colormode2 === "light" ? "black" : "white" }}>
          Minutes to read{" "}
          {0.008 *
            Text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
        </p>
        {/* let write preview also here  */}
        <h2 style={{ color: props.colormode2 === "light" ? "black" : "white" }}>
          Preview
        </h2>
        <p style={{ color: props.colormode2 === "light" ? "black" : "white" }}>
          {Text.length > 0 ? Text : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
// here i am making a form by using react and javascript
