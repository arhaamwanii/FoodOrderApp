import React from 'react';

export const Modal = ({ modalOpening, orderData, setModalOpening, setOrderData }) => {

    function handleCartClose() {
        setModalOpening(false);
    }

    function handleIncrease(title) {
        setOrderData(prevOrderData => {
            const updatedItems = prevOrderData.order.items.map(item =>
                item.name === title ? { ...item, quantity: item.quantity + 1 } : item
            );
            return { ...prevOrderData, order: { ...prevOrderData.order, items: updatedItems } };
        });
        console.log(orderData)
    }

    function handleDecrease(title) {
        setOrderData(prevOrderData => {
            const updatedItems = prevOrderData.order.items.map(item =>
                item.name === title && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
            );
            return { ...prevOrderData, order: { ...prevOrderData.order, items: updatedItems } };
        });
        console.log(orderData)

    }

    return (
        <div className={modalOpening ? "modal-overlay" : ""}>
            <dialog open={modalOpening} className={modalOpening ? "modal-dialog open" : "modal-dialog"}>
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
                    </div>
                <button onClick={handleCartClose}>Close</button>
                <button>Checkout</button>
            </dialog>
        </div>
    );
};

// reactProtal -- so that we can use this anywhere in the whole component tree,
// but we will it from any where but we will only inject the dialog in the 
// specific areas that we control
// so here we are recieving the order data but hwi
// there was no going back option in that case
//

