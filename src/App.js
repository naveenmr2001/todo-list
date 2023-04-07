import React,{useState} from "react";
import "./index.css"

const App = () =>{
  const [count,setcount] = useState(0);
  console.log(count);

  const increment = () =>{
    setcount(count+1);
  }

  return(
    <>
      <h1>{count}</h1>
      <button onClick={increment}>CLICK ME</button>
    </>
  )
}

export default App;