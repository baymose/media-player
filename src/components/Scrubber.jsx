import React, { useState } from "react";
import styled from "styled-components";

const Style = styled.div`
  padding: 20px 50px 0px 50px;
  position: relative;
  overflow: hidden;
  .container {
    height: 43px;
    .bar {
      margin-top: 20px;
      width: 100%;
      height: 12px;
      border: 1px solid #fff;
      border-radius: 5px;
      box-shadow: inset 0 0 4px #c7c7c7;
      position: relative;
    }
    .fill {
      border-radius: 5px;
      background: #82a3ff;
      width: 100px;
      height: 100%;
    }
    .dot {
      position: absolute;
      top: -15px;
      left: calc(-10px + 100px);
      width: 40px;
      height: 40px;
      border-radius: 25px;
      background: white;
      box-shadow: -4px -4px 26px 2px rgba(255, 255, 255, 0.6),
        8px 8px 16px 2px rgba(170, 184, 209, 0.6);
      display: flex;
      justify-content: center;
      .inner {
        box-shadow: -1px -1px 3px 1px rgba(255, 255, 255, 1),
          1px 1px 3px 1px rgba(170, 184, 209, 1);
        margin-top: 15px;
        width: 10px;
        height: 10px;
        background: #82a3ff;
        border-radius: 5px;
        opacity: 0.9;
      }
    }
  }
  .time-stamps {
      display: flex;
      justify-content: space-between;
      height: 20px;
      font-size: 0.8rem;
      color: #a0aec3;
  }
`;
const AlbumArt = ({ time, length }) => {
  return (
    <Style time={time} length={length}>
    <div className="time-stamps">
        <p>{Math.floor(time / 60)}:{time - Math.floor(time / 60) *60}</p>
        <p>{Math.floor(length / 60)}:{length - Math.floor(length / 60) *60}</p>

    </div>
      <div className="container">
        <div className="bar">
          <div className="fill"></div>
          <div className="dot">
            <div className="inner"></div>
          </div>
        </div>
      </div>
    </Style>
  );
};
export default AlbumArt;
