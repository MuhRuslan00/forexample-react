import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import { useParams } from 'react-router-dom';

export default function Definition(){
  const [word, setWord] = useState();
  console.log(useParams());
  let {search} = useParams();

useEffect(() => {
  // console.log('page loaded');
  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
    .then((response) => response.json())
    .then((data) => {
      setWord(data[0].meanings);
      console.log(data[0].meanings)

    }); 
  
}, []);

  return( 
  <>
  <h1>Here is definition:</h1>
  {word ? word.map((meaning) => {
  return (
  <p key={uuidv4()}>
    {meaning.partofSpeech + ': '}
    {meaning.definitions[0].definition}
    </p>);
  }) : null}
  
  </>
  )
}