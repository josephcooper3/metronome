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

  playBeep = () => {
    // Browser support to be added.
    const audioCtx = new AudioContext();
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'square'
    oscillator.frequency.value = 200;
    oscillator.start(0);
    oscillator.connect(audioCtx.destination);
  }

  render() {
    return (
      <>
        <h1>Metronome</h1>
        <SpeedDisplay />
        <SpeedSlider />
        <PlayButton play={this.playBeep} />
      </>
    )
  }

}

export default MetronomeContainer;