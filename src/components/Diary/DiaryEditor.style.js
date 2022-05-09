import styled from "styled-components";

// Editor

export const Container = styled.div`
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  input,
  textarea {
    margin-bottom: 20px;
    width: 500px;
    padding: 10px;
  }

  textarea {
    height: 150px;
  }

  select {
    width: 300px;
    padding: 10px;
    margin-bottom: 20px;
  }

  button {
    width: 100px;
    padding: 10px;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
`;
