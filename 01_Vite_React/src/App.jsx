import React from "react";
// import Event_Handling from "./Components/Event_Handling"
import UseEffect from "./Components/03_useEffect_Hook/UseEffect";
import TimerComponent from "./Components/03_useEffect_Hook/TimerComponent";
import Resize_Component from "./Components/03_useEffect_Hook/Resize_Component";
import Multi_Effect_Component from "./Components/03_useEffect_Hook/Multi_Effect_Component";
import Context_Hook from "./Components/05_useContext_Hook/Context_Hook";
import React_Router from "./Components/06_REACT_ROUTING/React_Router";
import React_Hook_Form from "./Components/07_REACT_HOOK_FORM/React_Hook_Form";
import Redux_Toolkit from "./Components/08_REDUX_TOOLKIT/Redux_Toolkit";
import Use_Ref from "./Components/09_USE_REF_HOOK/use_Ref";
import StopWatch from "./Components/09_USE_REF_HOOK/StopWatch";
import USE_MEMO from "./Components/10_USE_MEMO_HOOK/USE_MEMO";
import Use_CallBack from "./Components/11_USE_CALLBACK_HOOK/Use_CallBack";
import Expensive_Component from "./Components/11_USE_CALLBACK_HOOK/Expensive_Component";

function App() {
  return (
    <>
      {/* 1. LEARNING useEFFECT */}
      {/* <UseEffect/> */}
      {/* <TimerComponent/> */}
      {/* <Resize_Component/> */}
      {/* <Multi_Effect_Component/> */}

      {/* 2. EVENT HANDLING  */}
      {/* <Event_Handling/> */}

      {/* 3.LEARNING useCONTEXT */}
      {/* <Context_Hook/> */}

      {/*4. LEARNING REACT ROUTER  */}
      {/* <React_Router/> */}

      {/* 5. LEARNING REACT HOOK FORM */}
      {/* <React_Hook_Form/> */}

      {/* 6. LEARNING REACT REDUX TOOLKIT */}
      {/* <Redux_Toolkit/> */}

      {/* 7. LEARNING USEREF REACT  */}
      {/* <Use_Ref/> */}
      {/* <StopWatch/> */}

      {/* 8.LEARNING USEMEMO HOOK */}
      {/* <USE_MEMO/> */}

      {/* 9. LEARNING USECALLBACK HOOK */}
      {/* <Use_CallBack /> */}
      <Expensive_Component/>
    </>
  );
}

export default App;
