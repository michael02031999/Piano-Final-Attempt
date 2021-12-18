import React, { Component } from "react";

function play() {
  var audio = new Audio("https://archive.org/download/24-piano-keys/key04.mp3");
  audio.play();
}

class key04 extends React.Component {
  render() {
    return <div class="button4" onClick={play}></div>;
  }
}

export default key04;
