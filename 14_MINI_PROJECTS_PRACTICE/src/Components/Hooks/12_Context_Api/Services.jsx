import React, { useContext } from "react";
import { BioContext, useBioContext } from "./ContextApi";

function Services() {
  const { myName, myAge } = useBioContext();
  return (
    <div>
      Services
      <div>
        Home My name is {myName} and my age is {myAge}
      </div>
    </div>
  );
}

export default Services;
