import React from 'react'
import styles from './manage.module.css'

const Manage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.leftHeading}>Beneficiaries</h1>
        <h1 className={styles.rightHeading}>ADD BENEFICIARY</h1>
         <img src='/assets/images/contact.svg' alt='contactIcon'/> 
      </div>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src='assets/images/pdf.svg' alt='pdfIcon'/>
         <img src='assets/images/excel.svg' alt='excelIcon'/>
        </div>
        <div className={styles.searchBarContainer}>
            <input type="text" placeholder="Search..." className={styles.searchBar} />
            {/*<img src="/assets/images/search-icon.svg" alt="search" className={styles.searchIcon} />*/}
          </div>
        <div className={styles.innerHeadings}>
          <div className={styles.description}>
            <h2>Description</h2>
          </div>
          <div className={styles.manage}>
            <h2>Manage</h2>
          </div>
        </div>
        <div className={styles.lines}>
            <img src='assets/images/line.svg'/>
            <img src='assets/images/line.svg'/>
            <img src='assets/images/line.svg'/>
            <img src='assets/images/line.svg'/>
            <img src='assets/images/line.svg'/>
        </div>
      </div>
    </div>
  )
}

export default Manage;