import React from 'react'
import Styles from "./bottomcard.module.css"

function Bottomcard() {
  return (
    <div className={Styles.card}>
      <div className={Styles.paragraph}>
        <p>The mobile banking service is available on Smart Phones and Tablets using iOS,
          Android and Windows mobile operating systems. The E-banking platform
          can be accessed using Internet Explorer, Google Chrome, Mozilla Firefox,
          Safari and Opera browsers.</p>
      </div>
      <div className={Styles.icons}>
        <img className={Styles.playstore} src="assets/images/Playstore.svg" alt="Play Store" />
        <img className={Styles.appstore} src="assets/images/Appstore.svg" alt="App Store" />
      </div>
    </div>
  )
}

export default Bottomcard
