import { useEffect, useRef } from "react";


export const useContainerBackground = (color, myBox) => {

    if (typeof myBox === null) {
        console.log(":(");
      
    } else {
        useEffect(() => {
        myBox.style.backgroundColor = color;

    }, [color]);
        
    };
   
    console.log(myBox);
    
};
