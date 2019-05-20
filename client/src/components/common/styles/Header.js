import styled from "styled-components";

export const Header = styled.header`
  font-size: 19px;
  font-weight: bold;
  margin-top: 10px;
`;

export const SecondaryHeader = styled.header`
  font-size: 17px;
  margin-bottom: 30px;
`;

export const IconWrapper = styled.div`
  background-color: #2196f3;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  color: white;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const Icon = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
