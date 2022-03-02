import { RgbaColorPicker } from "react-colorful";
import { useState } from 'react'
import { stringify } from "postcss";

const Palette = () => {
  const [color, setColor] = useState({ r:255, g:255, b:255, a:1});
  let colorString = "";
  for (let i in color) {
      colorString += color[i];
      colorString += " ";


  }

  return (
      <>
       <RgbaColorPicker color={color} onChange={setColor}/>
        <p>🎨 {colorString}</p>
    
      </>
  );
}

export default Palette