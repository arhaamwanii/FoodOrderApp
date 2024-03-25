import React from 'react'

export const MealCard = ({image , title , price , description , orderData, setOrderData }) => {
    
    function handleAddToCart(){
        const updatedCart = {
            order: {
                items : [
                    ...orderData.order.items,
                    {name : title , quantity : 1} 
                ],
                customer: {
                    name: undefined,
                    email: undefined,
                    street: null ,
                    postalcode: null,
                    city: null
                  }
            }
        }
        setOrderData(updatedCart)
        console.log(updatedCart)
    }


  
    return (
    <div>
        <img style={{height : "100px"}} src={`http://localhost:3000/${image}`}  alt="" />
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <button style={{cursor : "pointer"}} onClick={() => {handleAddToCart()}}>Add to Card</button>
    </div>
  )
}
// 1 till 4:30 sleep
//  5:30 back to sleep
