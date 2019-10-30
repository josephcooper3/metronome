import React, { Component } from 'react';
import SpeedDisplay from '../components/SpeedDisplay';
import SpeedSlider from '../components/SpeedSlider';
import PlayButton from '../components/PlayButton';

class MetronomeContainer extends Component {

  constructor () {
    super();
    this.state = {
      tempo: 120,
      isPlaying: false,
      noteLength: 0.05
    }
  }

  playBeep = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    oscillator.frequency.value = 440;
    oscillator.start(0);
    oscillator.stop( + this.state.noteLength)
    oscillator.connect(audioCtx.destination);
  }

  handlePlayButtonClick = () => {
    this.state.isPlaying ? this.stopMetronome() : this.startMetronome();
  }

  startMetronome = () => {
    console.log("Starting")
  }

  stopMetronome = () => {
    console.log("Stopping")
  }

  render() {
    return (
      <>
        <h1>Metronome</h1>
        <SpeedDisplay />
        <SpeedSlider />
        <PlayButton handleClick={this.handlePlayButtonClick} />
      </>
    )
  }

}

export default MetronomeContainer;