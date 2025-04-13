import React, { useState } from "react";
import { createContext } from "react";
import ChildA from "./ChildA";
import "../../App.css";

//step1 : Create Context
//step2 : Wrap all the child inside  provider
//step3 :  pass value
//step 4: Consumer k andar jaake consume karlo

const UserContext = createContext();
const ThemeContext = createContext();

function Context_Hook() {
  const [user, setUser] = useState({ name: "ADITYA" });
  const [theme, setTheme] = useState("Light");

  return (
    <div>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div
            id="container"
            style={{ backgroundColor: theme === "Light" ? "beige" : "blue" }}
          >
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default Context_Hook;
export  {UserContext};
export { ThemeContext };
