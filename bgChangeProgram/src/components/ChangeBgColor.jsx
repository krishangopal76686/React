import { useEffect, useState } from "react";

function ChangeBgColor()
{
  const [color,setcolor]=useState('teal')
  
useEffect(()=>{
  const savedColor = localStorage.getItem("selectedColor")
  if(savedColor)
  {
    setcolor(savedColor)
  }
  
},[])

  const handleColorChange = (newColor)=>{
      setcolor(newColor);
      localStorage.setItem("selectedColor",newColor);
  }
   
  return(
    <>   
    <div className="w-auto h-screen  flex justify-center items-end" style={{
      backgroundColor:color
    }}>
        
        <div className=" rounded w-screen h-10 flex justify-center items-center">
            
              <div className="bg-white rounded-lg w-3/6 h-8 flex gap-8 justify-center items-center flex-wrap">
                  <button className="bg-blue-500 h-6 rounded w-10 " onClick={()=>{
            
            handleColorChange('blue');
                  }}>
                    Blue</button>
                  <button className="bg-red-500 rounded w-10 h-6"
                  onClick={()=>{
                    handleColorChange('red')
                  }}>Red</button>
                  <button className="bg-pink-500 rounded  w-10 h-6" onClick={()=>{
                    handleColorChange('pink')
                  }}>
                    Pink</button>
                  <button className="bg-black text-white rounded  w-10 h-6" onClick={()=>{
                    handleColorChange('black')
                  }}>
                    Black</button>
                  <button className="bg-orange-500 rounded  w-14 h-6" onClick={()=>{
                    handleColorChange('orange')
                  }}>Orange

                  </button>
                  <button className="bg-violet-500 rounded  w-12 h-6"
                  onClick={()=>{
                    handleColorChange('violet')
                  }}>Violet</button>
              </div>
        </div>
    </div>
    </>
 
  )
}

export default ChangeBgColor;