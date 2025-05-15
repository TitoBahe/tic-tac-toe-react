import { Dispatch, ReactElement, SetStateAction, useState } from "react";

interface buttonSquare {
   value: any;
   calculateValueByTurn: () => void;
}

export function ButtonSquare({value, calculateValueByTurn}:buttonSquare):ReactElement{
   return (
   <div>
    <button className="square-button" onClick={calculateValueByTurn}>{value}</button>
   </div>
   );  
}

export default function Board(): ReactElement{
   const [values, setValues] = useState(Array(9).fill(null));
   const [xIsNext, setXIsNext] = useState(true);

   function calculateValueByTurn(i:number) {
      let newValues = values.slice();
      if(newValues[i] || calculateWinner(values)){
         return;
      }
      if (xIsNext) {
         newValues[i] = 'X';
      } else {
         newValues[i] = 'O';
      }
      setValues(newValues);
      calculateWinner(values);
      setXIsNext(!xIsNext);
   }

   function restart(){
      setXIsNext(true); 
      setValues(Array(9).fill(null));
   }

   function calculateWinner(squares:Array<number>) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
   }
   const winner = calculateWinner(values);
   let textWinner: string = '';
   if(winner){
      textWinner = 'The winner is ' + winner;
   }
   return (
   < div>
   <div style={{display: 'flex'}}>
   <ButtonSquare value={values[0]} calculateValueByTurn={() => calculateValueByTurn(0)}></ButtonSquare>
   <ButtonSquare value={values[1]} calculateValueByTurn={() => calculateValueByTurn(1)}></ButtonSquare>
   <ButtonSquare value={values[2]} calculateValueByTurn={() => calculateValueByTurn(2)}></ButtonSquare>
    </div>
    <div style={{display: "flex"}}>
    <ButtonSquare value={values[3]} calculateValueByTurn={() => calculateValueByTurn(3)}></ButtonSquare>
    <ButtonSquare value={values[4]} calculateValueByTurn={() => calculateValueByTurn(4)}></ButtonSquare>
    <ButtonSquare value={values[5]} calculateValueByTurn={() => calculateValueByTurn(5)}></ButtonSquare>
    </div>
    <div style={{display: 'flex'}}>
    <ButtonSquare value={values[6]} calculateValueByTurn={() => calculateValueByTurn(6)}></ButtonSquare>
    <ButtonSquare value={values[7]} calculateValueByTurn={() =>calculateValueByTurn(7)}></ButtonSquare>
    <ButtonSquare value={values[8]} calculateValueByTurn={() => calculateValueByTurn(8)}></ButtonSquare>
    </div>
    <div style={{marginTop: '10px'}}>
      <button style={{marginLeft:'15px'}} onClick={restart}>Restart</button>
    </div>
    <div>
      {
         textWinner
      }
    </div>
    </div>
   )
}

