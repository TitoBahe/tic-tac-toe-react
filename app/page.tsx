'use client'
import "./globals.css";
import { ReactElement, useState } from "react";
import Board from "./components/mybutton";
export default function Home():ReactElement {

  
  return (
    <div style={{display:"flex", flexDirection:"column" ,justifyContent:"center", alignItems:"center", height:"100%"}}>
      <Board />
    </div>
  );
}
