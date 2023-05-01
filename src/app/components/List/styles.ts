import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #0035ac;
  padding: 0 10px;
`;

export const Title = styled.div`
  width: 280px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ccc;

  h3 {
    font-size: 22px;
    color: #fff;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
