import { useState, useEffect } from "react";

export default function Dictionary(){
  const [word, setWord] = useState('');
  const [word2, setWord2] = useState('');
  useEffect(() => {
      console.log('State updated' + word);
    }, [word]);

    useEffect(() => {
      console.log('State updated' + word2);
    }, [word]);

    // no dependancy update for any state change
    // empty dependency array---> execute once
    // pasing in data --> only execute when those state variables are changed
  return(
    <>
    <input type='text' onChange={(e) => {
      setWord(e.target.value);
      // console.log('State updated', word);
    }} />
    <h1>let's get the definition for {word}</h1> 

    <input type='text' onChange={(e) => {
      setWord2(e.target.value);
      // console.log('State updated', word);
    }} />
    <h2>let's get the definition for {word2}</h2> 
    </>
  )
}