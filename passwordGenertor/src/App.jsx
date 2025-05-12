import { useCallback, useEffect, useRef, useState } from "react";

function App()
{
  const [length,setLength]=useState(8);
  const [numberAllow,setnumberAllow]=useState(false);
  const [characterAllow,setCharacterAllow]=useState(false);
  const [password,setPassword]=useState();

  //useCallback
  const GeneratorPassword = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow) str+="0123456789"
    if(characterAllow) str+="!@#^&*<?>|\`+=_-~{}[]"

    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass)

  },[length,numberAllow,characterAllow])

  
  const copyPasswordToclibBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  //useEffect
  useEffect(()=>{
    GeneratorPassword()
  },[length,numberAllow,characterAllow,GeneratorPassword])

  //useRef
  const passwordRef = useRef(null);
  return(
    <div className="bg-gray-500 w-full max-w-md mx-auto shadow-md rounded-lg
       px-4 my-8 text-orange-500">
       <h1 className="text-white text-center ">Password generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input className="outline-none w-full py-1 px-3 "
       type="text"
        placeholder="password"
        value={password}
        readOnly
        ref={passwordRef}/>
       <button 
       onClick={copyPasswordToclibBoard}
       className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0"
       >Copy</button>
      </div> 

    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input
         type="range"
         min={6}
         max={100}
         className="cursor-pointer" 
         onClick={(e)=>setLength(e.target.value)}
         />
         <label>Length: {length}</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        id="numberAllow"
        onClick={((prev)=>!prev)}
        />
        <label>Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input
        defaultChecked={characterAllow}
        type="checkbox"
        id="characterAllow"
        onClick={((prev)=>!prev)}
        />
        <label>Characters</label>
      </div>

    </div>
      </div>
  )
}
export default App;
