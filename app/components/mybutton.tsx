
type buttonSquare = {
   onClick: () =>void;
   value: string;
}

export function ButtonSquare({onClick, value}: buttonSquare){
   return (
   <div>
    <button className="square-button" onClick={onClick}>{value}</button>
   </div>
   );  
}