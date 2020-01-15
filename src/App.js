import React from 'react';
import styled from 'styled-components';
import './App.css';
import AlbumArt from './components/AlbumArt';
import Nav from './components/Navigation';
import Controls from './components/Controls';
const Style = styled.div`
  padding-top: 50px;
  .App {
    border-radius: 40px;
    margin-top: 50px;
    max-width: 450px;
    height: 750px;
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
  const color = 'rgb(189, 133, 100)';
  return (
    <Style>
      <div className="App">
        <Nav />
        <AlbumArt />
        <Controls />
      </div>
    </Style>
  );
}

export default App;
