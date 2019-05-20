import styled from "styled-components";

export const StyledNavbar = styled.header`
  height: 60px;
  width: 100%;
  border-bottom: whitesmoke solid 5px;
`;

export const NavigationButton = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

interface navProps {
  readonly hovered: boolean;
}

export const NavigationMarker = styled.div<navProps>`
  padding: 0.7rem;
  font-size: 12px;
  opacity: 0.9;
  background-color: grey;
  color: white;
  border-radius: 3px;
  transform: translate(50%, 50%);
  opacity: ${props => (props.hovered ? "1" : "0")};
  transition: all 1s;
`;
