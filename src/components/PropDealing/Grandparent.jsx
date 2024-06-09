import { useState } from "react";
import Parent from "./Parent";


const Grandparent = () => {
    const [number,setNumber]=useState(0)
    return (
      <div>
        <h1>grand parent :{number}</h1>
        <Parent number={number} setNumber={setNumber}></Parent>
      </div>
    );
};

export default Grandparent;