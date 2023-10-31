import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
  const { gameOver, correctWord, currAttempt, } = useContext(AppContext)
  return (
    <div className='gameOver'>
      <h3>{gameOver.guessedWord ? 'Congratulations!!.. 🎉🎉🎉 you correctly guessed 😁👍' : 'you failed..!🥺'}</h3>
      <h1>The word is:  {correctWord}</h1>

      {gameOver.guessedWord && (<h3>you guessed in {currAttempt.attempt} attempts </h3>)}
      <a style={{ color: 'white' }} target="_blank" href={`https://www.google.co.in/search?q=${correctWord}+meaning+in+one+line`} rel="noreferrer"> check out what does "{correctWord}" mean?</a>
    </div>
  )
}

export default GameOver