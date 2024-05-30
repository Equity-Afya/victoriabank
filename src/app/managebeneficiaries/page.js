import React from 'react'
import styles from './managebeneficiaries.module.css'

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.leftHeading}>Beneficiaries</h1>
        <h1 className={styles.rightHeading}>ADD BENEFICIARY</h1>
        <img src='/assets/images/contact.svg' alt='contact' className={styles.contact}/>
       </div>
      <div className={styles.card}>
        <div className={styles.img}>
        <img src='/assets/images/pdf.svg' alt='pdf' className={styles.pdf}/>
        <img src='/assets/images/excel.svg' alt='excel' className={styles.excel}/>
        </div>
        <div className={styles.innerHeadings}>
            <div className={styles.description}>
            <h2>Description</h2>
            </div>
            <div className={styles.manage}>
            <h2>Manage</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
