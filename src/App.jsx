import React, { useState } from "react";
import { Meals } from './components/Meals';


function App() {
  const [orderData , setOrderData] = useState(
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
  )

  return (
    <>
    <h1>React Food </h1>
    <Meals setOrderData={setOrderData} orderData={orderData} />
    </>
  );
}

export default App;

