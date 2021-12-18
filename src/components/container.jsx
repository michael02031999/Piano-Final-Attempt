import React, { Component } from "react";

import Button1 from "./pianokeys/key01";
import Button2 from "./pianokeys/key02";
import Button3 from "./pianokeys/key03";
import Button4 from "./pianokeys/key04";
import Button5 from "./pianokeys/key05";

class container extends React.Component {
  render() {
    return (
      <>
        <div class="container-fluid">
          <Button1 />
          <Button2 />
          <Button3 />
          <Button4 />
          <Button5 />
        </div>
        <div>This is going to work</div>
      </>
    );
  }
}

export default container;
