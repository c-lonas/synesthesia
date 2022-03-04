
import { useState, useRef } from 'react'

import Script from 'next/script'

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { RgbaColorPicker } from "react-colorful";
import Palette0 from '../components/Colorful'



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
