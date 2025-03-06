import { useState ,useCallback ,useEffect ,useRef} from 'react'
// import './App.css'

function App() {
  const [num, setNum] = useState(false)
  const [length , setLength] = useState(8);
  const [char2, setChar2] = useState(false);
  const [passw , setPassw] = useState("");    
 
  //useRef hook
  const passwordRef = useRef(null)

  const PassWordGenerator = useCallback(() => {
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) {
      str = str + "0123456789";
    }
    if(char2){
       str  = str + "~!@#$%^&*()_+-=[]{}:;<>?/";
    }  
    for(let i = 1;i <= length ;i++){
       let char1 = Math.floor(Math.random()*str.length + 1) 
       pass = pass + str.charAt(char1);
    } 
    setPassw(pass)
  } ,[length , num , char2, setPassw])
    
  const copypasswordtoclipboard = useCallback(()=> {
    passwordRef.current ?.select();
    
    passwordRef.current?.setSelectionRange(0,100);
    
    window.navigator.clipboard.writeText(passw)
  },[passw])

  useEffect(() => { 
    PassWordGenerator()
  }, [length,num,char2,PassWordGenerator])
 
  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
    
    <h1 className='text-white text-center my-3 '>Password Generator</h1>
    
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      
       <input 
       
        type=" text" 
        value={passw}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
       
       />

       <button 
       onClick={copypasswordtoclipboard} 
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
       >copy

       </button>

     </div>
    
     <div className='flex text-sm gap-x-2'>

      <div className='flex items-center gap-x-1'>

        <input 
          type="range"
          min={1}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
        />
        
        <label>Length:{length}</label>
      
      </div>

      <div className='flex items-center gap-x-1'>
      
      <input 
          type="checkbox"
          defaultChecked={num}
          id="numberInput"
          onChange={(e) => {
            setNum((prev) => !prev)
          }}
      />

      <label htmlFor='numberInput'>Numbers</label>
      
      </div>

      <div className='flex items-center gap-x-1'>
      
      <input 
        type="checkbox"
        defaultChecked={char2}
        id="characterInput"
        onChange={() => {
          setChar2((prev) => !prev)
        }}
      />

      <label htmlFor='characterInput'>Character</label>
      
      </div>
    
     </div>
   
   </div>
     </>
  )
}

export default App
