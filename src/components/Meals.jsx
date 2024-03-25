import React, { useEffect, useState } from 'react'
import { MealCard } from './MealCard';


export const Meals = () => {
    const [recievedData , setRecievedData] = useState()

    // fething the data from the backend \
    useEffect(() => {
         async function fetchAvailableMeals() {
        try {
          const response = await fetch('http://localhost:3000/meals');
          const data = await response.json();
          console.log('Available Meals:', data);
          setRecievedData(data)
        } catch (error) {
          console.error('Error fetching available meals:', error);
        }
      }   
      fetchAvailableMeals()
    } , [] )
    


  return (
    <div>
        {}
        <MealCard/>
    </div>
  )
}
