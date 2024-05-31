import React from 'react'
import  styles from "./addbeneficiary.module.css"
import Add from '../components/add-beneficiaries/Add';
import Services from "../components/services/Services"
import Sidebar from '../components/Sidebar/Sidebar';
import Greetings from '../components/greetings/greetings';
import Bottomcard from '../components/bottomcard/bottomcard';
function page() {

  return (
    <div  className={styles.add}>
        <div className={styles.sidebar}>
            <Sidebar/>
        </div>
  <div class={styles.gridcontainer}>
  <div className={styles.header}>
    <div className={styles.header1}>
     Header
    </div>
     <div className={styles.greetings}>
     <Greetings/>
    </div>
  </div>
  <div class={styles.maincontent}>
 <div  class={styles.maincontent1}>
    My Account
  </div>
  
  <div class={styles.maincontent2}>
    <div className={styles.maincontent21}>
      <Services/> 
    </div>
    <div className={styles.maincontent22}>
       <Add/>
    </div>
    </div>
  </div>
  <div class={styles.bottomcard}>
    <div className={styles.up}>
  <Bottomcard/>
    </div>
    <div className={styles.down}>
      Footer
    </div>
  </div>
 
</div>

    </div>
  

  )
}

export default page
