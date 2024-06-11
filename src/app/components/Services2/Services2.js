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
        <ul onClick={() => setClickedServiceOption("CheckbookRequest")} className='ul4'>Cheque book Request </ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("CheckStatusEnquiry")} className='ul4'> Cheque Status Enquiry </ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("BankersChequeRequest")} className='ul4'> Banker's Cheque Request</ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("StopPayment")} className='ul4'> Stop Payment </ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("ViewChequeRequest")} className='ul4'> View Cheque Request</ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("KRAReceipt")} className='ul4'>KRA receipt</ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("CustomerInstructions")} className='ul4'> Customer Instructions</ul>
        <hr />
        <ul onClick={() => setClickedServiceOption("CreditCardPayment")} className='ul4'>Credit Card Payment</ul>
        <hr />
      </div>
    </div>
  )
}

export default Services2

