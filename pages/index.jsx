
import { useState } from 'react'

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    
    <div class="wrapper">
      <div class="header-container">
        <p><a href="" target="_blank">chase lonas development</a></p>

      </div>
      <div class="main-content">
        <div class="center-content">
          <Header title="Develop. Preview. Ship. 🚀" />
          <ul>
            {names.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>

          <button onClick={handleClick}>Like ({likes})</button>
        </div>
        <div class="sidebar-nav">
          <Header title="Sidebar Navigation"/>
          <ul>
            <li>A button or something?</li>
          </ul>
        </div>

      </div>
      
      
    </div>
    
  )
}
