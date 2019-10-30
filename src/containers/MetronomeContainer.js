import React, { Component } from 'react';
import SpeedDisplay from '../components/SpeedDisplay';
import SpeedSlider from '../components/SpeedSlider';
import PlayButton from '../components/PlayButton';

class MetronomeContainer extends Component {

  constructor () {
    super();
    this.state = {
      speed: 120,
      isPlaying: false
    }
  }

  render() {
    return (
      <>
        <h1>Metronome</h1>
        <SpeedDisplay />
        <SpeedSlider />
        <PlayButton />
      </>
    )
  }

}

export default MetronomeContainer;