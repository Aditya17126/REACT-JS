import { useState ,useCallback ,useEffect ,useRef} from 'react'
// import './App.css'

function App() {
  const [num, setnum] = useState(false)
  const [length , setlength] = useState(8);
  const [char2, setchar2] = useState(false);
  const [passw , setpassw] = useState("");    
 
  //useRef hook
  const passwordRef = useRef(null)

  const PassWordGenerator = useCallback(()=> {
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str +="0123456789"
    if(char2) str +="~!@#$%^&*()_+-=[]{}:;<>?/"
   
    for(let i = 1;i <= length ;i++){
       let char1 = Math.floor(Math.random()*str.length + 1) 
       pass += str.charAt(char1);
    } 
    setpassw(pass)
    
  } ,[length , num , char2,setpassw])
    
  const copypasswordtoclipboard=useCallback(()=> {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
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
       <input type=" text" 
       value={passw}
       className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
       />
       <button onClick={copypasswordtoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={1}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input 
        type="checkbox"
        defaultChecked={num}
        id="numberInput"
        onChange={(e) => {
          setnum((prev) => !prev)
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
          setchar2((prev) => !prev)
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
