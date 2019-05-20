import styled from "styled-components";

export const Button = styled.button`
  background-color: #2196f3;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  outline: none;
  float: right;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    filter: brightness(90%);
    transition: all 0.3s;
  }
`;
