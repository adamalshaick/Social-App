import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeader = styled.header`
  width: 100%;
  background-color: whitesmoke;
  height: 60px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 20px;
  margin-top: 50px;
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
`;

const Header = ({ text }) => {
  return (
    <div>
      <StyledHeader className="text-center">{text}</StyledHeader>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;
