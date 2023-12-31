import React from "react";

export default function About(props) {
  // so when it is come to css, in react we can pass css as object to be use in the javascript
  // const [defaultcolor, setcolor] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let defaultcolor = {
    color : props.aboutuscolor === "light" ? "black" : "white",
    backgroundColor : props.aboutuscolor === "light" ? "white" : "#AAB7B8"
  }
  // const [defaultheading, setheading] = useState("Enable dark mode");

  // function modechanging() {
  //   if (defaultcolor.color === "black") {
  //     setcolor({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px white solid",
  //     });
  //     setheading("Enable light mode");
  //   } else {
  //     setcolor({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setheading("Enable dark mode");
  //   }
  // }
  return (
    <>
      <div className="container" style={defaultcolor}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={defaultcolor}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={defaultcolor}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyse the Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={defaultcolor}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={defaultcolor}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Our Team</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={defaultcolor}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={defaultcolor}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Reviews from Customers</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-3">
          <button
            type="button"
            onClick={modechanging}
            style={defaultcolor}
            class="btn btn-dark"
          >
            {defaultheading}
          </button>
        </div> */}
      </div>
    </>
  );
}
