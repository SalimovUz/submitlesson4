import "../App.css";
import { useState } from "react";

const Confirm = () => {
  const [submitbtn, setSubmitbtn] = useState("Submit title");
  const [backbtn, setBackbtn] = useState("Back");
  const [destitle, setDestitle] = useState("Choose title content");

  const submit = () => {
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const backBtn = document.getElementById("back");
    const subBtn = document.getElementById("subm");
    backBtn.style.display = "block";
    setSubmitbtn("Submit description");
    setDestitle("Choose description content");

    line2.style.opacity = "1";

    if (subBtn.textContent === "Submit description") {
      setSubmitbtn("Yes, go ahead");
      setBackbtn("No, go back");
      setDestitle("Are you happy now?");
      line2.style.opacity = "1";
      line3.style.opacity = "1";
    }

    if (backBtn.textContent == "No, go back") {
      setSubmitbtn("Submit description");
      setBackbtn("Back");
      setDestitle("Choose description content");
    }

    if (subBtn.textContent === "Yes, go ahead") {
      setDestitle("Ok, we're done. Thanks for sending us your data!");
      line3.style.opacity = "1";
      subBtn.style.display = "none";
      backBtn.style.display = "none";
    }
  };

  const back = () => {
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const subBtn = document.getElementById("subm");
    const backBtn = document.getElementById("back");

    backBtn.style.display = "none";
    setSubmitbtn("Submit title");
    setDestitle("Choose title content");
    line2.style.opacity = "0.3";

    if (backBtn.textContent == "No, go back") {
      setSubmitbtn("Submit description");
      backBtn.style.display = "block";
      setBackbtn("Back");
      setDestitle("Choose description content");
      line3.style.opacity = "0.3";
      line2.style.opacity = "1";
    }
  };

  const line1 = () => {
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const subBtn = document.getElementById("subm");
    const backBtn = document.getElementById("back");
    setDestitle("Choose title content");
    line2.style.opacity = "0.3";
    line3.style.opacity = "0.3";
    backBtn.style.display = "none";
    subBtn.style.display = "block";
    setSubmitbtn("Submit title");
  };

  const lin2 = () => {
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const subBtn = document.getElementById("subm");
    const backBtn = document.getElementById("back");

    line2.style.opacity = "1";
    line3.style.opacity = "0.3";
    setSubmitbtn("Submit description");
    setDestitle("Choose description content");
    backBtn.style.display = "block";
    setBackbtn("Back");
    subBtn.style.display = "block";
  };

  const lin3 = () => {
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");

    if (line2.style.opacity === "1") {
      line3.style.opacity = "1";
      setSubmitbtn("Yes, go ahead");
      setBackbtn("No, go back");
    } else {
      alert("oldin description ni tasdiqlang");
    }
  };
  return (
    <div className="container">
      <div className="table">
        <div className="steps">
          <div onClick={line1} id="line1" className="line">
            <h1 id="one">1</h1>
            <h2 id="first">Choose title</h2>
          </div>

          <div onClick={lin2} id="line2" className="line">
            <h1 id="two">2</h1>
            <h2 id="second">Choose description</h2>
          </div>

          <div onClick={lin3} id="line3" className="line">
            <h1 id="three">3</h1>
            <h2 id="third">Confirm data</h2>
          </div>
        </div>

        <div className="submits">
          <div className="description">
            <h1 id="title">{destitle} </h1>
          </div>

          <div id="btns" className="submit">
            <button onClick={back} id="back">
              {backbtn}
            </button>
            <button onClick={submit} id="subm">
              {submitbtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
