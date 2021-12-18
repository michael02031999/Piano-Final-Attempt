import React, { Component } from "react";

function play(event) {
  if (event.keyCode === 65 || event.type == "click") {
    var audio = new Audio(
      "https://archive.org/download/24-piano-keys/key01.mp3"
    );
    audio.play();
  }
}

class key01 extends React.Component {
  render() {
    document.addEventListener("keydown", play);

    return <div class="button1" onClick={play}></div>;
  }
}

export default key01;
