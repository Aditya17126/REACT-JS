import { useEffect, useState } from "react";
import "./style.css";
import ProgressBar from "./ProgressBar";

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);
 

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);
  return (
    // PROJECT 1 => PROGRESS BAR
    <>
     <div className="app">
       <span>PROGRESS BAR</span>
       <ProgressBar value={value} onComplete={() => {}} />
     </div>
     
   </> 
  );
}

export default App;
