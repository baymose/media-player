import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
const Style = styled.div`
  width: 100%;
  height: 80px;
  padding: 30px 40px;

  display: flex;
  justify-content: space-between;

  h1 {
    line-height: 40px;
    font-size: 1rem;
    color: #a0b0c8;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  button {
    svg {
    }
    font-size: 1.2rem;
    color: #a0b0c8;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: none;
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
`;
const Navigation = ({}) => {
  return (
    <Style>
      <button>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h1>Playing Now</h1>
      <button>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </Style>
  );
};
export default Navigation;
