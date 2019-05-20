import styled from "styled-components";

export const TextLabel = styled.label`
  position: relative;
`;

export const TextPlaceholder = styled.span``;

export const TextBorder = styled.div`
  ${TextLabel}:hover & {
    height: 2px;
    background-color: black;
  }
`;

export const TextInput = styled.input`
  border: lightgrey solid 1px;
  border-radius: 5px;
  outline: none;
  background-color: none;
  position: relative;
  width: 350px;
  height: 37px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding-left: 15px;

  &::placeholder {
    color: lightgrey;
  }

  &:focus {
    border-color: #2196f3;
    transition: border-color 0.2s;

    &::placeholder {
      color: grey;
      transition: color 0.2s;
    }
  }

  &:focus ~ ${TextBorder} {
    background-size: 100% 100%;
    height: 2px;
  }

  &:focus ~ ${TextPlaceholder} {
    color: darkblue;
  }
`;
