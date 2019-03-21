import React from "react";
import { Loader, Dot } from "./styles/StyledLoading";

const Loading = () => {
  return (
    <div className="entry">
      <Loader>LOADING</Loader>
      <Dot>.</Dot>
    </div>
  );
};

export default Loading;
