import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

useEffect(()=>{
  console.log("beginning")
  
  if (timeRemaining===0){
    setTimeRemaining(10)
    onAnswered(false)
  }
  
  const timer=setTimeout(()=>{

      setTimeRemaining(prev=>(prev-1))

  },1000)

  return function (){
    console.log("I cleaned up")
    clearTimeout(timer)
  }



},[timeRemaining,onAnswered])
 
  // useEffect(()=>{
  // const timer= setTimeout(()=>setTimeRemaining(timeRemaining>0?timeRemaining-1:timeRemaining),1000)
 
  // return ()=>{
  //   console.log("return function")
  //   clearTimeout(timer)
  //   handleAnswer(false)
  // }},[timeRemaining])




 console.log(timeRemaining)

  function handleAnswer(isCorrect) {
    setTimeRemaining(10)
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
