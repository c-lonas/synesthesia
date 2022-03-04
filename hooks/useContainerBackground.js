import { useEffect, useRef } from "react";


export const useContainerBackground = (color, myBox) => {

    if (myBox === undefined) {
        console.log(":(");
      
    } else {
        useEffect(() => {
        myBox.style.backgroundColor = color;

    }, [color]);
        
    };
   
    console.log(myBox);
    
};
