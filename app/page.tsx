'use client'
import "./globals.css";
import { ButtonSquare } from "./components/mybutton";
import { useState } from "react";
export default function Home() {

  const [turn, setTurn] = useState(0);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function playHanlder(){
    let value = turn;
    setTurn(value+1);
  }
  function calculateSquareValue(i: number){
    if(squares[i]) return;
    if(turn % 2  == 0){
      squares[i] = 'X';
   }
   else{
      squares[i] = 'O';
   }
   const newSquares = [...squares];
   setSquares(newSquares);
  }

  return (
    < div style={{display:"flex", flexDirection:"column" ,justifyContent:"center", alignItems:"center", height:"100%"}}>
      <div style={{display: 'flex'}}>
      <ButtonSquare onClick={() => {playHanlder(); calculateSquareValue(0); }} value={squares[0]}></ButtonSquare>
      <ButtonSquare onClick={() => {playHanlder(); calculateSquareValue(1); }}value={squares[1]}></ButtonSquare>
      <ButtonSquare onClick={() => {playHanlder(); calculateSquareValue(2); }} value={squares[2]}></ButtonSquare>
    </div>
    <div style={{display: "flex"}}>
      <ButtonSquare onClick={() => {playHanlder();  calculateSquareValue(3); }} value={squares[3]}></ButtonSquare>
      <ButtonSquare onClick={() => {playHanlder();  calculateSquareValue(4); }} value={squares[4]}></ButtonSquare>
      <ButtonSquare onClick={() => {playHanlder();  calculateSquareValue(5); }} value={squares[5]}></ButtonSquare>
    </div>
    <div style={{display: 'flex'}}>
      <ButtonSquare onClick={() => {playHanlder(); calculateSquareValue(6);  }} value={squares[6]}></ButtonSquare>
      <ButtonSquare onClick={() => {playHanlder(); calculateSquareValue(7);  }} value={squares[7]}></ButtonSquare>
      <ButtonSquare onClick={() => {playHanlder(); calculateSquareValue(8);  }} value={squares[8]}></ButtonSquare>
    </div>
    </div>
  );
}
