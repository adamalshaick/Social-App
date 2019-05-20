import React from "react";
import { StyledNavbar } from "../common/styles/Navbar";
import NavButton from "./NavButton";

const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <ul style={{ listStyle: "none", float: "right", display: "flex" }}>
        <li>
          <NavButton name="notifications" icon="fas fa-comments fa-2x" />
        </li>
        <li>
          <NavButton name="messages" icon="fas fa-bell fa-2x" />
        </li>
        <li>
          <button>profile</button>
        </li>
      </ul>
    </StyledNavbar>
  );
};
export default Navbar;
