import React from 'react'
import Contacsitem from './Contacsitem';
import styles from "./Contactlist.module.css"

function Cntactlist({contacts,deleteHandelr}) {
   
  return (
    <div className={ styles.container}>
        <h3>Contact List</h3>
        {contacts.length? <ul className={styles.contacts}>
            {contacts.map((contact)=>(
           <Contacsitem key={contact.id} data={contact} deleteHandelr={deleteHandelr} />
                
                
            ))}
        </ul>: <p className={styles.message}>No Contat yet</p>}
        
    </div>
  )
}

export default Cntactlist