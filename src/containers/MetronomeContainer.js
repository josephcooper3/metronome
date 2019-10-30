import React, { Component } from 'react';
import SpeedDisplay from '../components/SpeedDisplay';
import SpeedSlider from '../components/SpeedSlider';
import PlayButton from '../components/PlayButton';

class MetronomeContainer extends Component {

  constructor () {
    super();
    this.state = {
      tempo: 120,
      isPlaying: false
    }
  }

  playBeep = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    oscillator.frequency.value = 440;
    oscillator.start(0);
    oscillator.stop(0 + 0.05)
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