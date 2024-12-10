import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  background: #000000;
  min-width: 220px;
  border-radius: 5px;
  color: #ffffff;
  border: 1px solid transparent;
  font-size: 16px;
  transition: 0.3s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutLineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
