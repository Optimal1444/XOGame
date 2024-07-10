
import { useEffect, useRef, useState } from 'react'
import './App.css'
import './output.css'
import 'animate.css';

function App() {
  const [symbol,setSymbol]=useState(0)
  const [winner,setWinner]=useState(0)
  const inputRef=useRef([])
  const winnerRef=useRef()
  const containerRef=useRef()
  const handleClick=(index)=>{
    if(!winner&&!inputRef.current[index].innerText){
      if(!symbol){
          inputRef.current[index].innerText='X'
          setSymbol(1)
      }
      else{
        inputRef.current[index].innerText='O'
        setSymbol(0)
      }
      checkWinner(index)  
    }
    
  }
  const reset=()=>{
    const classList=containerRef.current.className
    containerRef.current.className+=('animate__bounceOut');
    containerRef.current.addEventListener('animationend', () => {
      containerRef.current.className=classList
      });
    for(let i=0;i<9;i++){
      inputRef.current[i].innerText=''
      inputRef.current[i].className='bg-gray-200 h-28 w-28  text-4xl flex justify-around items-center'
  }
    setSymbol(0)
    setWinner(0)
    

  }
  const checkWinner=(index)=>{
    const letter=inputRef.current[index].innerText
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (inputRef.current[a].innerText==letter && inputRef.current[b].innerText==letter && inputRef.current[c].innerText==letter) {
        inputRef.current[a].className+=' text-green-600 animate__animated animate__flash'
        inputRef.current[b].className+=' text-green-600 animate__animated animate__flash'
        inputRef.current[c].className+=' text-green-600 animate__animated animate__flash'
        setWinner(1)
        

      }
    }
  }
  
  
  return (
    <>
      <div ref={containerRef}  className="bg-white p-8 rounded-lg shadow-md max-w-md border m-4 flex flex-col justify-center items-center mx-auto my-10 animate__animated  ">
        <h1 className="text-3xl font-bold mb-3 text-center">
            X O
        </h1>
        <h3 className="text-1xl font-bold mb-3 text-center animate__animated" >
            Player {symbol?'2':'1'} turn
        </h3>
            <div className="grid grid-cols-3 gap-1  ">
            <div className=" bg-gray-200 h-28 w-28  text-4xl flex justify-around items-center " onClick={()=>{handleClick(0)}} ref={(el)=>{inputRef.current[0]=el}} ></div>
            <div className=" bg-gray-200 h-28 w-28  text-4xl flex justify-around items-center " onClick={()=>{handleClick(1)}} ref={(el)=>{inputRef.current[1]=el}} ></div>
            <div className=" bg-gray-200 h-28 w-28  text-4xl flex justify-around items-center " onClick={()=>{handleClick(2)}} ref={(el)=>{inputRef.current[2]=el}}></div>
            <div className=" bg-gray-200 h-28 w-28  text-4xl flex justify-around items-center " onClick={()=>{handleClick(3)}} ref={(el)=>{inputRef.current[3]=el}} ></div>
            <div className=" bg-gray-200 h-28 w-28  text-4xl flex justify-around items-center " onClick={()=>{handleClick(4)}} ref={(el)=>{inputRef.current[4]=el}} ></div>
            <div className=" bg-gray-200 h-28 w-28  text-4xl flex justify-around items-center " onClick={()=>{handleClick(5)}} ref={(el)=>{inputRef.current[5]=el}} ></div>
            <div className=" bg-gray-200 h-28 w-28  text-4xl flex justify-around items-center " onClick={()=>{handleClick(6)}} ref={(el)=>{inputRef.current[6]=el}} ></div>
            <div className=" bg-gray-200 h-28 w-28  text-4xl flex justify-around items-center " onClick={()=>{handleClick(7)}} ref={(el)=>{inputRef.current[7]=el}} ></div>
            <div className=" bg-gray-200 h-28 w-28  text-4xl flex justify-around items-center " onClick={()=>{handleClick(8)}} ref={(el)=>{inputRef.current[8]=el}} ></div>
        </div>
        <div id="status" className="mt-6 text-gray-900 
            text-center"></div>
        <div className="flex justify-center mt-4">
            <button onClick={reset}
                className="bg-blue-500 text-white py-2 px-4 rounded-md 
                hover:bg-blue-600 focus:outline-none focus:ring-2 
                focus:ring-blue-600 focus:ring-offset-2 transition 
                duration-300 ease-in-out transform hover:scale-105">
                Restart
            </button>
        </div>
        {winner==1 &&
        <span ref={winnerRef} className="inline-flex items-center rounded-md bg-green-50 px-4 py-3 text-4xl font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mt-8 " >Winner</span>
        }
        </div>
        
    </>
  )
}

export default App
