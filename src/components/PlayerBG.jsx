import React from "react";
import ReactPlayer from "react-player";
import "../styles/Player.css";

const PlayerBG = ({src}) => (
  <video autoPlay loop muted 
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }}
  src={src}
  >
  </video>
);

export default PlayerBG;