import React from "react";
import "./TicTacToe.css";
import circle_img from "../Assets/circle.png";
import cross_img from "../Assets/cross.png";
import { useState } from "react";
import { useRef } from "react";

let data = ["", "", "", "", "", "", "", "", ""];



const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggele = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src ='${cross_img}'>`;
      data[num] = "X";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src ='${circle_img}'>`;
      data[num] = "O";
      setCount(++count);
    }
    checkWin();
  };

  const won = (winner) => {
    setLock(true);

    if (winner === "X") {
      titleRef.current.innerHTML = `Congratulations :<img src =${cross_img}> wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations :<img src =${circle_img}> wins`;
    }
  };


  const checkWin = () => {
            if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
      // checking on the same line

    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
      // checking on the same line

    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
      // checking on the same line


    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
      // check of the top left to middle left to bottom left corner


    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
      // checking on the tio middle , middle middle, botttom middle

    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
      // checking on the top right, middle right,bottom right

    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);  
      // checking the angle from the top left to bottom right

      
    } 
    else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
    // checking on the top right to bottom left
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe Game Using <span> React </span>";
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        TicTacToe Game in <span>React</span>
      </h1>

      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            ref={box1}
            onClick={(e) => {
              toggele(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            ref={box2}
            onClick={(e) => {
              toggele(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            ref={box3}
            onClick={(e) => {
              toggele(e, 2);
            }}
          ></div>
        </div>

        <div className="row2">
          <div
            className="boxes"
            ref={box4}
            onClick={(e) => {
              toggele(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            ref={box5}
            onClick={(e) => {
              toggele(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            ref={box6}
            onClick={(e) => {
              toggele(e, 5);
            }}
          ></div>
        </div>

        <div className="row3">
          <div
            className="boxes"
            ref={box7}
            onClick={(e) => {
              toggele(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            ref={box8}
            onClick={(e) => {
              toggele(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            ref={box9}
            onClick={(e) => {
              toggele(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button
        className="reset"
        onClick={() => {
          reset();
        }}
      >
        {" "}
        reset
      </button>
    </div>
  );
};

export default TicTacToe;
