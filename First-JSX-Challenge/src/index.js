import React from "react";
import ReactDOM from "react-dom";

const fName = "Akemy";
const lName = "Mory";
const currentDate = new Date();
const year = currentDate.getFullYear();
let luckyNumber = Math.floor(Math.random() * 10) + 1;
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 contentEditable="true" spellCheck="false">
      Write your name here
    </h1>
    <h1>
      Hello {fName} {lName} !
    </h1>
    <p>Your lucky number is {luckyNumber}!</p>
    <h1>My favorite books</h1>
    <div>
      <img
        alt="Harry Potter Book"
        className="books"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfgRSXOOV40AVv0M4drSbMjfq7bWFGFM5xg&usqp=CAU"
      />
      <img
        alt="Lord of the Rings Book"
        className="books"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUod-TtOVAukmO--rGMMFl5dET2eU8FDtU8w&usqp=CAU"
      />
      <img
        alt="Alice in Wonderland Book"
        className="books"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYGCQ_i8Z2P4spBdWKViSyRf5YjgUHXwtVA&usqp=CAU"
      />
    </div>
    <p>
      Studying React has been a transformative experience for me. As I delved
      into this JavaScript library for building user interfaces, I quickly
      realized its immense power and flexibility. React's component-based
      architecture has allowed me to create highly modular and reusable UI
      elements, streamlining the development process and making my codebase more
      maintainable. Additionally, the virtual DOM concept has enhanced the
      efficiency of my web applications by minimizing unnecessary re-rendering
      and optimizing performance.
    </p>
    <p>
      Through my study of React, I've gained a deeper understanding of front-end
      development and the importance of responsive and interactive user
      interfaces. React's ecosystem, with tools like Redux for state management
      and React Router for navigation, has broadened my skill set and enabled me
      to build more robust and feature-rich applications. I've also honed my
      problem-solving abilities, as React often presents unique challenges that
      require creative solutions.
    </p>
    <img src={img} />
    <h3>
      Created by {fName} {lName}
    </h3>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
