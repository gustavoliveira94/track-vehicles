import styled from 'styled-components';

import { TextField as Input } from '@mui/material';

export const Wrapper = styled.div`
  width: 500px;
  padding: 15px;
  background-color: #f9f9f9;
  border-top: 6px solid #0035ac;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #0035ac;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 40px;
  }

  form {
    width: 100%;

    button {
      background-color: #0035ac;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextField = styled(Input)`
  & {
    margin-bottom: 10px !important;
  }
`;

export const Divide = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 15px 0;

  hr {
    width: 100%;
  }

  small {
    position: absolute;
    font-size: 12px;
    background-color: #f9f9f9;
    padding-right: 10px;
  }
`;
