import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  z-index: 1000;
  left: 50%;
  top: 20px;
  display: flex;
  align-items: center;
  width: 400px;
  height: 60px;
  background-color: #f9f9f9;

  input {
    padding: 0 15px;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
  width: 80px;
  background-color: #0035ac;
  color: #fff;
`;
