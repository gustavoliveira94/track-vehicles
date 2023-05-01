import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #0035ac;
  cursor: pointer;
  z-index: 1000;
  font-size: 25px;

  a {
    color: #fff;
    text-decoration: none;
  }
`;
