import React, { useState } from 'react'
    let updatedCart = null

export const MealCard = ({image , title , price , description , orderData, setOrderData }) => {

    function handleAddToCart(){

        if (updatedCart === null){
         updatedCart = {
            order: {
                items : [
                    {name : title , quantity : 1 , price : price} 
                ],
                customer: {
                    name: undefined,
                    email: undefined,
                    street: null ,
                    // 'postal-code': null,
                    city: null
                  }
            }
        }
        }else{

            let obj = updatedCart.order.items.find(item => item.name === title);
            let inputObject 
            if(obj){
                // obj.quantity++
                // inputObject = obj
                updatedCart.order.items.find(item => item.name === title).quantity++
               // so we are updating the thing that already exists 
            // for some reaoson this code is being executed -- more then once  
                
            }else{
                inputObject =  {name : title , quantity : 1}
                updatedCart.order.items.push( {name : title , quantity : 1 , price : price} )
            }
    
             updatedCart = {
                order: {
                    items : [
                        ...orderData.order.items,
                        // {name : title , quantity : 1} ,
                        // inputObject -- this was causing undefined thing that is solved
                    ],
                    customer: {
                        name: undefined,
                        email: undefined, 
                        street: null ,
                        // 'postal-code': null,
                        city: null
                      }
                }
            }
             console.log(obj)

        }
        setOrderData(updatedCart ? updatedCart : null)        
        console.log(orderData)  

    // well this pos here was rendered everywhere --

        return updatedCart
    }   


  
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
//so we have an object in there which updates on each click, 
        // so for every click we need to check if the thing we clicked is already in there if it put
        //  we code for 5 horus -- then we study for like 4 hours ok! sounds fair enough so
        // so have to get in that zone of like coding for 2 session coding 2 session studying that should be it 
        // 8pm to 4 am --> 8hr stream 50 min break 
        // 2x coding sessions -- 2x studying sessions 
        // math 12 chapter we have : --- till saturday coding + maht 
        // till then sunday and monday we do math whole day
        // bro for the next some time all am going to be doing is studying then -- next some time alll i 
