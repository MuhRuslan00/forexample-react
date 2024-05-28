import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


export default function Dictionary(){

  const [word, setWord] = useState('');
  const navigate = useNavigate();

//   const [word2, setWord2] = useState('');
// useEffect(() => {
//   console.log('State Updated',+ word);
// }, [word]);

// useEffect(() => {
//   console.log('State Updated',+ word2);
// }, [word2]);


return (
  <>
  <input type='text' 
  onChange={(e) => {
    setWord(e.target.value);
  }} />
  {/* <h2>Let's get the definition for {word}</h2>

  <input type='text' 
  onChange={(e) => {
    setWord2(e.target.value);
  }} />
  <h2>Let's get the definition for {word2}</h2> */}

  {/* ********* */}
  <button onClick={()=>{
    navigate('/definition/' + word, {replace: true});
    console.log('click');
  }}>Search</button>
  </>
)
}