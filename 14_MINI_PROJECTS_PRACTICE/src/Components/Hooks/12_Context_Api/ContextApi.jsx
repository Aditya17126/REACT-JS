import {createContext, useContext} from "react";

export const BioContext = createContext();

//2nd STEp
const ContextApi = ({children})=>{
  const myName = "ADITYA GUPTA";
  const myAge = 22;


  return <BioContext.Provider value={{myName : myName , myAge : myAge}}>
       {children}
  </BioContext.Provider>  
}
export default ContextApi

//CUSTOM HOOKS

export const useBioContext = ()=>{
  const context = useContext(BioContext);
  if(context === undefined){
    throw new Error("Component must be warpped in ContextApi");
    
  }
  return context;
}