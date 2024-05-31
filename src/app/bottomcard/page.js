import React from 'react'
import Styles from "./bottomcard.module.css"

function page() {
  return (
   <div className={Styles.card}>
        <div>
        <p>The mobile banking service is available on Smart Phones and Tablets using <br />iOS,
        Android and Windows mobile operating systems. The E-banking platform <br />
        can be accessed using Internet Explorer, Google Chrome, Mozilla Firefox, <br />
        Safari and Opera browsers.</p> 
        </div>
      <div className={Styles.icons}>
        <img src="assets/images/Playstore.svg" alt="Play Store" />
        <img src="assets/images/Appstore.svg" alt="Play Store" />
      </div>
    </div>
  )
}

export default page
