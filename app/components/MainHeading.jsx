'use client'

import Image from "next/image";
import { useState } from "react";

export default function MainHeading({ a, b }) {
  
  // let age = 20
  

  const [age, setAge] = useState(8)
  const[fname, setfName] = useState("")
  const [isloading, setisloading] = useState(false)

  function increaseage(){
    // age++
    setAge(age+1)
  }

  increaseage
  return(
    <>
      {/* <h3>Muneeb Iqbal</h3> */}
      {/* <Image src="/img1.avif" width="300" height="200"/> */}
      {/* <h1 className="text-xl">{a+b}</h1> */}

      <h1 className="text-xl">{a+b}</h1>
      <p> Age is:{age}</p>
      <input type="button" className="bg-green-300" value="Click me" onClick={()=>{increaseage()}}/>
    
      <br/>
      <br/>
      <input type="text" className="border" value={fname} onChange={(e)=>{setfName(e.target.value)}}/>

      <br/>
      {
        isloading && <Image src="/loading.gif" width="100" height="100" alt="loading"/>
      }
      
      <input type="button" className="bg-blue-500" value="OK" onClick={()=>{setisloading(!isloading)}}/>
    </>
  )
}


