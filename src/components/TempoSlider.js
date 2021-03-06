import React from 'react';

const TempoSlider = ({tempo, minTempo, maxTempo, handleTempoChange}) => (
  <div>
    <input type="range" min={minTempo} max={maxTempo} value={tempo} name="tempo" onChange={event => handleTempoChange(event.target.value)}/>
    <label htmlFor="tempo">Tempo</label>
  </div>
)

export default TempoSlider;