import React, { useEffect, useState } from 'react'
import { MealCard } from './MealCard';


export const Meals = ({orderData , setOrderData}) => {
    const [recievedData , setRecievedData] = useState()

    // FETCHING DATA FROM THE BACKEND

    useEffect(() => {
         async function fetchAvailableMeals() {
        try {
          const response = await fetch('http://localhost:3000/meals');
          const data = await response.json();
          console.log( data);
          setRecievedData(data)
        } catch (error) {
          console.error('Error fetching available meals:', error);
        }
      }   
      fetchAvailableMeals()
    } , [] )


    return (
        <div>
          {recievedData && recievedData.map((meal) => (
            <MealCard
              key={meal.id}
              id={meal.id}
              title={meal.name}
              price={meal.price}
              description={meal.description}
              image={meal.image}
              orderData={orderData}
              setOrderData={setOrderData}
            />
          ))}
        </div>
      );
      
}

