
import { useState } from 'react'

import Script from 'next/script'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Palette from '../components/Colorful'

function HeaderTemp({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <>
      {/* <Script
        src="../js/loader.js"
        strategy="beforeInteractive"
      />
      <Script 
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="../js/spectrum.js"
        strategy='beforeInteractive'
      />
       */}

      <div className="wrapper">

        <Header/>

        <div className="main-content">
          <div className="center-content">
            <HeaderTemp title="Develop. Preview. Ship. 🚀" />
            <ul>
              {names.map(name => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>
          </div>

          <div className="main-palette-container">
            <Palette/>
          </div>

          <Navbar/>

        </div>
        
        
      </div>
    </>
      
  )
}
