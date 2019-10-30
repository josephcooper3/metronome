import React, { Component } from 'react';
import TempoDisplay from '../components/TempoDisplay';
import TempoSlider from '../components/TempoSlider';
import PlayButton from '../components/PlayButton';

class MetronomeContainer extends Component {

  constructor () {
    super();
    this.state = {
      minTempo: 40,
      maxTempo: 218,
      tempo: 120,
      isPlaying: false,
      intervalID: ''
    }
  }

  playBeep = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    oscillator.frequency.value = 440;
    oscillator.start(0);
    oscillator.stop(0 + 0.05)
    oscillator.connect(audioCtx.destination);
    console.log("Beep!");
  }

  handlePlayButtonClick = () => {
    this.state.isPlaying ? this.stopMetronome() : this.startMetronome();
  }

  startMetronome = () => {
    this.updatePlaying(true);
    console.log("Starting")

    // Convert the tempo in beats per millisecond.
    const interval = (60 / this.state.tempo) * 1000

    // Set the interval, function to perform and update the state.
    const intervalID = setInterval(() => {this.playBeep()}, interval);
    this.setState({intervalID: intervalID})
  }

  stopMetronome = () => {
    this.updatePlaying(false);
    console.log("Stopping")

    // Clear the interval.
    clearInterval(this.state.intervalID);
  }

  updatePlaying = (status) => {
    this.setState({
      isPlaying: status
    });
  }

  handleTempoChange = (newTempo) => {
    this.setState({tempo: newTempo})
  }

  render() {
    return (
      <>
        <h1>Metronome</h1>
        <TempoDisplay tempo={this.state.tempo} />
        <TempoSlider 
        minTempo={this.state.minTempo}
        maxTempo={this.state.maxTempo}
        tempo={this.state.tempo}
        handleTempoChange={this.handleTempoChange}
        />
        <PlayButton handleClick={this.handlePlayButtonClick} />
      </>
    )
  }

}

export default MetronomeContainer;