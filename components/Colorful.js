import { RgbaColorPicker } from "react-colorful";
import { useState, useRef } from 'react'
import { useContainerBackground } from "../hooks/useContainerBackground";



const Palette0 = () => {
  const [color, setColor] = useState({ r:255, g:255, b:255, a:1});
  const colorString = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  

  const myBox = useRef(null);

  useContainerBackground(colorString, myBox);    

  // SynthPad(color, colorString);

  return (
    <>
      <div className="palette-container" ref={myBox}>
        <RgbaColorPicker color={color} onChange={setColor}/>
        <p>🎨 {colorString} </p>
      </div>

    </>
    
  );
}

const SynthPad = (function(color, colorString) {
  console.log("called synth function");
  console.log(color.r)

  //initialize synth variables

  let lowNote = 261.63; // C4
  let highNote = 493.88; // B4

  // constructor
  let SynthPad = function() {

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    myAudioContext = new window.AudioContext();

  };

  // play a note

  SynthPad.playSound = function(event) {
    oscillator = myAudioContext.createOscillator();
    gainNode = myAudioContext.createGain();


    oscillator.type = "triangle";

    oscillator.connect(gainNode);
    gainNode.connect(myAudioContext.destination);


    // SynthPad.updateFrequency(event);

    oscillator.frequency.value = color.r;
    gainNode.gain.value = color.a;

    oscillator.start(0);


  };

  SynthPad.stopSound = function(event) {
    oscillator.stop(0);
  }

  SynthPad.calculateNote = function(colorR) {
    let noteDifference = highNote - lowNote;
    let noteOffset = (noteDifference / colorR)

    return lowNote + noteOffset;
  }

  SynthPad.calculateVolume = function(colorA) {
    let volumeLevel = colorA;
    return volumeLevel;

  }

  return SynthPad;


});



export default Palette0;