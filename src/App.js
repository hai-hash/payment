
import React, { useState } from "react";
import "./App.css";
import PayPal from "./Components/paypal";
import * as payment from './Components/momo';
function App() {
  const [checkout, setCheckOut] = useState(false);
  const onPayment = () => {
    payment.createPayment();
  }

  return (
    <div className="App">
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
      <button onClick={onPayment}>Thanh toán bằng momo</button>
    </div>
  );
}

export default App;
