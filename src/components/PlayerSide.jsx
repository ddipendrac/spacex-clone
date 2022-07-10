import React from "react";
import ReactPlayer from "react-player";
import "../styles/Player.css";

const PlayerSide = ({src}) => (
  <video autoPlay loop muted 
  className="player-side"
  src={src}
  >
  </video>
);

export default PlayerSide;