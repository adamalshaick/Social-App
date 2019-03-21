import styled from "styled-components";

export const Button = styled.a`
  color: white;
  &:hover {
    color: white;
  }
  width: 120px;
  background-color: ${props =>
    props.fb
      ? "#3B5998"
      : props.inst
      ? "#49769C"
      : props.yt
      ? "#FF0000"
      : props.twit
      ? "#55ACEE"
      : props.linkd
      ? "#1F88BE"
      : "white"};
`;
