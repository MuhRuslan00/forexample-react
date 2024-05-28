import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function DefinitionSearch(){
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
  <form className='flex space-between space-x-2 max-w-[300px]' 
  onSubmit={()=>{
    navigate('/dictionary/' + word);
  }}>
  <input className='shrink min-w-0px  px-2 py-2 rounded'
  placeholder='Dino'
  type='text' 
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
  <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded'>Search</button>
  </form>
)
}
