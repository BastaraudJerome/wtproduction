// eslint - disable;
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Items from "./Components/Items";
import "/assets/styles/Items.scss";

export default function Test() {
  console.log(useState(1));

  const [monState, setMonState] = useState("Allez-y");
  const [monAutreState, setMonAutreState] = useState("Copier moi");

  const changeState = () => {
    setMonState("Ici");
  };
  const changeAutreState = () => {
    setMonAutreState("C'est Paris");
  };

  useEffect(() => {
    console.log("le composants a changé");
  }, []);
  
  return (
    
    <div className="container">
      <Items p1={monState} p2={monAutreState} c1={changeState} c2={changeAutreState}></Items>
      
    </div>
  );
}

const container = document.getElementById("react");
const root = createRoot(container);
root.render(<Test tab="react" />);
