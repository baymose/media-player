import React from 'react';
import styled from 'styled-components';
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
`;
const Controls = ({}) => {
  return (
    <Style>
      <h2>Stupid Deep</h2>
      <h3>Jon Bellion</h3>
    </Style>
  );
};
export default Controls;
