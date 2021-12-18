import React, { Component } from "react";

function play() {
  var audio = new Audio("https://archive.org/download/24-piano-keys/key05.mp3");
  audio.play();
}

class key05 extends React.Component {
  render() {
    return <div class="button5" onClick={play}></div>;
  }
}

export default key05;
