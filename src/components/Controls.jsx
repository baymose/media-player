import React from "react";
import styled from "styled-components";
import Scrubber from './Scrubber'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForward,
  faBackward,
  faPlay,
  faPause
} from "@fortawesome/free-solid-svg-icons";
const Style = styled.div`
  padding-top: 30px;
  h2 {
    color: #6b7993;
    margin-bottom: 0;
  }

  h3 {
    color: #a0aec3;
    margin-top: 10px;
    font-weight: 500;
  }
  .time-bar {
    height: 50px;
  }
  .playback-controls {
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;

    button {
      outline: none;
      transition: all 0.1s;

      font-size: 1.2rem;
      color: #a0b0c8;
      width: 85px;
      height: 85px;

      border-radius: 100px;
      border: 4px solid #e4e2ff;
      text-shadow: 1px 4px 6px #fff, 0 0 0 #000, 1px 4px 6px transparent;
      background: rgb(222, 231, 244);
      background: radial-gradient(
        circle,
        rgba(222, 231, 244, 1) 30%,
        rgba(238, 250, 255, 1) 100%
      );

      box-shadow: -4px -4px 26px 2px rgba(255, 255, 255, 1),
        8px 8px 16px 2px rgba(170, 184, 209, 0.9);
    }
      button:hover {
      box-shadow: -4px -4px 26px 2px rgba(255, 255, 255, 0.6),
        8px 8px 16px 2px rgba(170, 184, 209, 0.6);
      }
    .pause {
      background: #7a9fff;
      color: white;
    }
  }
`;
const Controls = ({ data, updateSong, status, toggleStatus, time }) => {
  return (
    <Style>
      <h2>{data.title}</h2>
      <h3>{data.artist}</h3>
      <Scrubber length={data.length} percent={time / data.length * 100} time={time}/>
      <div className="playback-controls">
        <button onClick={() => updateSong("backward")}>
          <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
        </button>
        {status == "paused" && (
          <button onClick={() => toggleStatus()}>
            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
          </button>
        )}
        {status == "playing" && (
          <button className="pause" onClick={() => toggleStatus()}>
            <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
          </button>
        )}
        <button onClick={() => updateSong("forward")}>
          <FontAwesomeIcon icon={faForward}></FontAwesomeIcon>
        </button>
      </div>
    </Style>
  );
};
export default Controls;
