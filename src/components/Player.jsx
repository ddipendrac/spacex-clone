import React from "react";
import ReactPlayer from "react-player";
import "../styles/Player.css";

const Player = ({url}) => (
  <div className="player-wrapper">
    <ReactPlayer
      url={url}
      className="react-player"
      playing
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
);

export default Player;