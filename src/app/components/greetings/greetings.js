import React from 'react'
import Styles from './greetings.module.css'

function Greetings() {
  return (
    <div className={Styles.greetings}>
        <div className={Styles.good}>
       Good Day Eliud Njogu
        </div>
        <div>
        Last login: 
        </div>
    </div>
  )
}

export default Greetings
