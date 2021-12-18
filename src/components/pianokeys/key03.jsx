import React, { Component } from "react";

function play(event) {
  if (event.keyCode === 68 || event.type == "click") {
    var audio = new Audio(
      "https://archive.org/download/24-piano-keys/key03.mp3"
    );
    audio.play();
  }
}

class key03 extends React.Component {
  render() {
    document.addEventListener("keydown", play);
    return <div class="button3" onClick={play}></div>;
  }
}

export default key03;
