export const addZerosToStart = (number: number, totalLength:number = 3):string => number.toString().length < 3 
  ? number.toString().padStart(totalLength, "0")
  : number.toString()

