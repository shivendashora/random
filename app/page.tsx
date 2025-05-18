"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";
export default function Home() {
  const [countnum,setcount] = useState(0);
  function count(){
    setcount(countnum+1);
  }
  return (
    <div>
      <Navbar/>
    </div>
  )
}