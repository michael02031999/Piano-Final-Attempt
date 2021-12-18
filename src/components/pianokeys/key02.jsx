import React, { Component } from "react";

function play(event) {
  if (event.keyCode === 83 || event.type == "click") {
    var audio = new Audio(
      "https://archive.org/download/24-piano-keys/key02.mp3"
    );
    audio.play();
  }
}

class key02 extends React.Component {
  render() {
    document.addEventListener("keydown", play);

    return <div class="button2" onClick={play}></div>;
  }
}

export default key02;
