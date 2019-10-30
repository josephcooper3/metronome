import React from 'react';

const PlayButton = ({handleClick, isPlaying}) => (

  <button onClick={handleClick}>{isPlaying ? "Stop" : "Start"}</button>

)

export default PlayButton;