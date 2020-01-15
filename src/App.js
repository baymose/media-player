import React, { useState } from "react";
import styled from "styled-components";
import music from "./music";
import "./App.css";
import AlbumArt from "./components/AlbumArt";
import Nav from "./components/Navigation";
import Controls from "./components/Controls.jsx";
const songs = [];
const Style = styled.div`
  button:hover {
    box-shadow: -4px -4px 26px 2px rgba(255, 255, 255, 0.6),
      8px 8px 16px 2px rgba(170, 184, 209, 0.6);
  }
  button {
    border: 3px solid #e4e2ff;
    cursor: pointer;
    outline: none;
  }
  .state {
    margin: 0 auto;
    margin-top: 30px;
    padding: 20px 40px;
    width: 80vw;
    border-radius: 8px;

    overflow: scroll;
    background: white;
  }
  padding-top: 50px;
  .App {
    border-radius: 40px;
    margin-top: 50px;
    max-width: 450px;
    height: 850px;
    border: 3px solid #dae6f4;
    margin: 0 auto;
    background: rgb(237, 245, 253);
    background: linear-gradient(
      0deg,
      rgba(237, 245, 253, 1) 0%,
      rgba(222, 232, 250, 1) 40%
    );
  }
`;

function App() {
  const color = "rgb(189, 133, 100)";
  const [state, setState] = useState({
    songs: music,
    current: 0,
    status: 0,
    time: 30,
  });

  const toggleStatus = state => {
    const newState = {
      ...state,
      status: state.status == 0 ? 1 : 0
    };
    return newState;
  };
  const updateSong = (direction, state) => {
    console.log(direction);
    const newState = {
      ...state,
      current:
        direction == "forward"
          ? state.current == state.songs.length - 1
            ? 0
            : state.current + 1
          : state.current == 0
          ? 0
          : state.current - 1
    };
    console.log();
    return newState;
  };
  return (
    <Style>
      <div className="App">
        <Nav />
        <AlbumArt art={state.songs[state.current].art} />
        <Controls
        time={state.time}
          toggleStatus={() => setState(toggleStatus(state))}
          status={state.status == 0 ? "paused" : "playing"}
          updateSong={direction => setState(updateSong(direction, state))}
          data={state.songs[state.current]}
        />
      </div>
      <div className="state">
        <pre>{JSON.stringify(state, null, " ")}</pre>
      </div>
    </Style>
  );
}

export default App;
