
import { useState } from 'react'

import Script from 'next/script'

import { useContainerBackground } from "../hooks/useContainerBackground";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { RgbaColorPicker } from "react-colorful";
import Palette0 from '../components/Colorful'

window.onload = function() {
    let synthPad = new SynthPad();
};

export default function HomePage() {

  return (
    <>
      <div className="wrapper">
        <Header/>
        <div className="main-content">

          <div className="main-palette-container">
            <Palette0/>
          </div>

          <Navbar/>
        </div>
      </div>
    </>
  )
}
