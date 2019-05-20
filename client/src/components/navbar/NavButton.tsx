import React, { Component } from "react";
import { NavigationButton, NavigationMarker } from "../common/styles/Navbar";

interface Props {
  name: string;
  icon: string;
}

interface State {
  hovered: boolean;
}

export class NavButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  render() {
    return (
      <>
        <NavigationButton
          onMouseEnter={() => {
            this.setState({ hovered: true });
          }}
          onMouseLeave={() => {
            this.setState({ hovered: false });
          }}
        >
          <i className={this.props.icon} />
        </NavigationButton>
        <NavigationMarker hovered={this.state.hovered}>
          {this.props.name}
        </NavigationMarker>
      </>
    );
  }
}

export default NavButton;
