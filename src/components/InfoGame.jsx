import React from 'react'

export const InfoGame = ({score, remaining}) => {
  return (
    <div>InfoGame
        <p>Trials: {score}</p>
        <p>Pairs remaining: {remaining}</p>
    </div>
  )
}
