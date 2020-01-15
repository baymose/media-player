import React from 'react';
import styled from 'styled-components';
const Style = styled.div`
  background-image: url(${props => props.art});
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 300px;
  border-radius: 200px;
  margin: 0 auto;
  margin-top: 75px;
  border: 8px solid #dee8fa;
  box-shadow: -18px -20px 26px 2px rgba(255, 255, 255, 0.9),
    16px 16px 16px 2px rgba(170, 184, 209, 0.5);
`;
const AlbumArt = ({art}) => {
  return <Style art={art}></Style>;
};
export default AlbumArt;
