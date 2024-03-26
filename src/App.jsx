import React, { useState } from "react";
import { Meals } from './components/Meals';
import { Modal } from './components/Modal';


function App() {
  const [orderData , setOrderData] = useState()
  const [modalOpening , setModalOpening] = useState(false)

function handleModal(){
  setModalOpening(true)
}

  return (
    <>
    <header>
      <h1 style={{display : "inline"}}>React Food </h1>
      <button onClick={handleModal}> Cart</button>
    </header>
    <div>
      <Modal orderData={orderData} modalOpening={modalOpening} setModalOpening={setModalOpening} setOrderData={setOrderData}/>
      <Meals setOrderData={setOrderData} orderData={orderData} />
    </div>
    </>
  );
}

export default App;







  //   {
  //   order: {
  //     items: [
  //       { name: undefined, quantity: null }
  //     ],
  //     customer: {
  //       name: undefined,
  //       email: undefined,
  //       street: null ,
  //       postalcode: null,
  //       city: null
  //     }
  //   }
  // }

