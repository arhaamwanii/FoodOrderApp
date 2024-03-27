import React, { useState } from 'react';  
  
export const Modal = ({ modalOpening, orderData, setModalOpening, setOrderData }) => {  
    const [showCheckout, setShowCheckout] = useState(false);  
  
    function handleCartClose() {  
        setModalOpening(false);  
    }  
  
    function handleCheckout() {  
        setShowCheckout(true);  
    }  
  
    function handleIncrease(title) {  
        setOrderData(prevOrderData => {  
            const updatedItems = prevOrderData.order.items.map(item =>  
                item.name === title ? { ...item, quantity: item.quantity + 1 } : item  
            );  
            return { ...prevOrderData, order: { ...prevOrderData.order, items: updatedItems } };  
        });  
    }  
  
    function handleDecrease(title) {  
        setOrderData(prevOrderData => {  
            const updatedItems = prevOrderData.order.items.map(item =>  
                item.name === title && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item  
            );  
            return { ...prevOrderData, order: { ...prevOrderData.order, items: updatedItems } };  
        });  
    }  
  
    function handleCustomerChange(event) {  
        const { name, value } = event.target;  
        setOrderData(prevOrderData => ({  
            ...prevOrderData,  
            order: {  
                ...prevOrderData.order,  
                customer: {  
                    ...prevOrderData.order.customer,  
                    [name]: value  
                }  
            }  
        }));  
        console.log(orderData)
    }  
  
    function handleCheckoutSubmit(event) { 
        const orderData2 = {  
            items: [/* array of items */],  
            customer: {  
              email: 'customer@example.com',  
              name: 'John Doe',  
              street: '123 Main St',  
              'postal-code': '12345',  
              city: 'Anytown'  
            }  
          };  
         
        fetch('http://localhost:3000/orders', {  
            method: 'POST',  
            headers: {  
            'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({ order: orderData.order})  
        })  
        .then(response => response.json())  
        .then(data => {  
            console.log(data.message); // "Order created!"  
        })  
        .catch(error => {  
            console.log('Error creating order:', error);  
        });  
        
        event.preventDefault();  
        setShowCheckout(false);  
        console.log(orderData)
        console.log(orderData2)
    }  
  
    return (  
        <div className={modalOpening ? "modal-overlay" : ""}>  
            <dialog open={modalOpening} className={modalOpening ? "modal-dialog open" : "modal-dialog"}>  
            <button style={{float : "right"}} onClick={handleCartClose}>X</button> 
                {!showCheckout ? (  
                    <div>  
                        <h3>Your Cart</h3>  
                        {orderData ? (  
                            <ul>  
                                {orderData.order.items.map((item, index) => (  
                                    <li key={index}>  
                                        <p>{`${item.name} - which costs ${item.quantity} * ${item.price} = ${item.quantity * item.price}`}</p>  
                                        <button onClick={() => handleDecrease(item.name)}>-</button>  
                                        {item.quantity}  
                                        <button onClick={() => handleIncrease(item.name)}>+</button>  
                                    </li>  
                                ))}  
                            </ul>  
                        ) : (  
                            <p>Your cart is empty.</p>  
                        )}  
                       
                        <button onClick={handleCheckout}>Checkout</button>  
                    </div>  
                ) : (  
                    <div>  
                        <h3>Checkout</h3>  
                        <form onSubmit={handleCheckoutSubmit}>  
                            <input type="text" name="name" placeholder="Name" onChange={handleCustomerChange} required />  
                            <input type="email" name="email" placeholder="Email" onChange={handleCustomerChange} required />  
                            <input type="text" name="street" placeholder="Street" onChange={handleCustomerChange} required />  
                            <input type="text" name="'postal-code'" placeholder="Postal Code" onChange={handleCustomerChange} required />  
                            <input type="text" name="city" placeholder="City" onChange={handleCustomerChange} required />  
                            <button type="submit">Submit</button>  
                        </form>  
                        <button onClick={() => setShowCheckout(false)}>Return to Cart</button>  
                    </div>  
                )}  
 
            </dialog>  
        </div>  
    );  
};  

// reactProtal -- so that we can use this anywhere in the whole component tree,
// but we will it from any where but we will only inject the dialog in the 
// specific areas that we control
// so here we are recieving the order data but hwi
// there was no going back option in that case


