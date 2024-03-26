import React from 'react'
    let updatedCart = null

export const MealCard = ({image , title , price , description , orderData, setOrderData }) => {
    
    function handleAddToCart(){

        if (updatedCart === null){
         updatedCart = {
            order: {
                items : [
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
        }else{
            let obj = updatedCart.order.items.find(item => item.name === title);
            let inputObject 
            if(obj){
                obj.quantity++
                // inputObject = obj
                updatedCart.order.items.find(item => item.name === title).quantity++
                // well we are still entering the new object rather then editting the older one
                // logic should be pretty simple check if the thing that is being entered already exits if it does instead of entering a new one upate the older oen

            }else{
                inputObject =  {name : title , quantity : 1}
            }

             updatedCart = {
                order: {
                    items : [
                        ...orderData.order.items,
                        inputObject
                        // {name : title , quantity : 1} ,
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
            

             console.log(obj)

             if(obj){
                obj.quantity++
                obj = updatedCart.order.items.find(item => item.name === title)
             }
        }
        setOrderData(updatedCart ? updatedCart : null)
  
        return updatedCart
        //so we have an object in there which updates on each click, 
        // so for every click we need to check if the thing we clicked is already in there if it put
    }

      console.log(orderData)
  
    return (
    <div>
        <img style={{height : "100px"}} src={`http://localhost:3000/${image}`}  alt="" />
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <button style={{cursor : "pointer"}} onClick={handleAddToCart}>Add to Card</button>
    </div>
  )
}
// 1 till 4:30 sleep
//  5:30 back to sleep
