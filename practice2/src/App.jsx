import { useState,useCallback,useEffect,useRef } from 'react';


function App() {
  // Initialize state to "white"
  const[length,setLength]= useState(8);
  const[num,setNum]= useState(false);
  const[char,setChar]= useState(false);
  const[password,setPassword]=useState("")
  const passwordRef= useRef(null);
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str += "0123456789"
    if(char) str += "!@#$%&*?+=[]{}`~||\\"

    for( let i=1; i<=length; i++){
      let char= Math.floor(Math.random() * str.length +1)
      pass+= str.charAt(char)


    }
    setPassword(pass)



  },[length,num,char,setPassword])
  const copyPasswordToclip=useCallback(()=>
    {
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)},[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,num,char,passwordGenerator])
  return (
    <>
    <div className='w-full h-screen bg-black text-white'>
  <h1 className='text-4xl text-center text-white'>Password Generator</h1>
  
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-slate-800'>
    
    {/* Flex container to align input and button side by side */}
    <div className='flex items-center gap-x-2'>
      <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
      />
      <button
      onClick={copyPasswordToclip} 
      className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0 rounded-lg hover:bg-blue-950' >
        Copy
      </button>
    </div>

    <div className='flex text-sm gap-x-1 my-4'>
      <div className='flex items-center gap-x-2'>
        <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
        />
        <label htmlFor="length"> length:{length}</label>
      </div>
      <div className='flex text-sm gap-x-1 my-4'>
        <input
        type='checkbox'
        defaultChecked={num}
        id='numberInput'
        onChange={()=>{setNum((prev)=>!prev)}}
        />
        <label htmlFor="num"> Numbers:{num}</label>
      </div>
      <div className='flex text-sm gap-x-1 my-4'>
        <input
        type='checkbox'
        defaultChecked={char}
        id='charecterInput'
        onChange={()=>{setChar((prev)=>!prev)}}
        />
        <label htmlFor="char"> Charecter:{char}</label>
      </div>
    </div>

  </div>
</div>

    </>
  );
}

export default App;
