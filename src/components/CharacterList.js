import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from "./CharacterCard";
import '../index.css'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(res => {
          setData(res.data.results)
        })
        .catch(e => {
          console.log(e)
        })
  }, []);

  return (
      <div className='character-list'>
          {
              data.map(character =>
              <CharacterCard
                  id={character.id}
                  name={character.name}
                  species={character.species}
                  image={character.image}
                  gender={character.gender}
                  status={character.status}
              />
              )
          }
      </div>
  )
  ;
}
