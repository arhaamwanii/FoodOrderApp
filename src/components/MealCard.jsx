import React from 'react'

export const MealCard = ({image , title , prize , discription }) => {
  return (
    <div>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{prize}</p>
        <p>t{discription}his the dummy discription for the real project</p>
        <button>Add to Card</button>
    </div>
  )
}
