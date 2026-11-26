import Image from "next/image";

import MainHeading from '../components/MainHeading'
import Todos from "../components/Todos";
export default function Home() {
  return(
<>
    <h1 className = "text-3xl text-green-500" >About Page</h1>
    <p> This is my karobar app About Page</p>
    <Todos></Todos>
<MainHeading/>
</>

  );
}
