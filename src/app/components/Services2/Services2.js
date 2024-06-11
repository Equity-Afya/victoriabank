import React, { useContext } from "react";
import "./Services2.css";
import { UserContext } from '@/app/context/UserContext';

function Services2() {
  const {
    setClickedServiceOption
  } = useContext(UserContext);

  return (
    <div>
      <div className='services2'>Services</div>
      <div className='service'>
        <hr />
        <ul onClick={() => setClickedServiceOption("CheckbookRequest")}> Cheque book Request </ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("CheckStatusEnquiry")}> Cheque Status Enquiry </ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("BankersChequeRequest")}> Banker's Cheque Request</ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("StopPayment")}> Stop Payment </ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("ViewChequeRequest")}> View Cheque Request</ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("KRAReceipt")}>KRA receipt</ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("CustomerInstructions")}> Customer Instructions</ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("CreditCardPayment")}>Credit Card Payment</ul>
        <hr />
      </div>
    </div>
  )
}

export default Services2

