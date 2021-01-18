import { useState, useEffect } from 'react'

import styles from '../styles/Home.module.css'

import Button from '@material-ui/core/Button'

import { useQuery } from 'react-query'

const Character = () => {
  let apiUrl = 'https://www.breakingbadapi.com/api/'

  const handleRandomizeCharacter = () => {
    console.log('Breaking Bad Characters...')
    console.log(data.length)

    const index = Math.floor(Math.random() * data.length)

    console.log(JSON.stringify(data[index]))

    setCharacter(data[index])
  }

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`${apiUrl}characters`).then((res) => res.json())
  )

  const [character, setCharacter] = useState(null)

  useEffect(() => {
    if (data) {
      handleRandomizeCharacter()
    }
  }, [data])

  if (isLoading) return 'Loading please wait...'

  if (error) return `Error! ${error.message}`

  return (
    <div>
      <Button
        variant='contained'
        color='primary'
        onClick={handleRandomizeCharacter}
      >
        Randomize
      </Button>
      {character && (
        <div>
          <h1 className={styles.characterName}>{character?.name}</h1>
          <img
            className={styles.avatar}
            alt='character'
            src={character?.img}
          ></img>
          <div>
            <strong>Nickname: </strong>
            {character?.nickname}
          </div>
          <div>
            <strong>Occupation: </strong>
            {character?.occupation}
          </div>
          <div>
            <strong>Status: </strong>
            {character?.status}
          </div>
          <div>
            <strong>Actor: </strong>
            {character?.portrayed}
          </div>
        </div>
      )}
    </div>
  )
}

export default Character
