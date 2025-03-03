
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";


let name = "ADITYA GUPTA";
function App() {
  return (
    <>
   {/* passing peops to funtion navbar */}
   <Navbar title ="Textutils" about="About TextUtils"/>

   {/* I HAVE IMPORTED NAVBAR */}
   {/* <Navbar/> */}

   <div className="container my-3" >
   <Textform heading="ENTER THE TEXT TO ANALYZE"/>
   </div>
     <h1>HELLO </h1>
    </> 
  ) ;
}

export default App;
