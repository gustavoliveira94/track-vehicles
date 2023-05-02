import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const Title = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0035ac;

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #f9f9f9;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  cursor: pointer;
  display: flex;
  margin-top: 10px;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  :hover {
    opacity: 0.9;
  }
`;

export const Icon = styled.div<{ defect: boolean }>`
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: ${({ defect }) => (defect ? '#e10000' : '#0035ac')};
  margin-right: 20px;
  color: #f9f9f9;

  svg {
    font-size: 22px;
  }
`;

export const Infos = styled.div`
  p {
    font-size: 16px;
    color: #0035ac;

    :last-child {
      color: #ccc;
      font-size: 12px;
      margin-top: -5px;
    }
  }
`;

export const NotFound = styled.p`
  font-size: 16px;
`;
