import React from 'react'
import styles from './Contactitem.module.css'
function Contacsitem({data:{id,name,lastName,email,phone},deleteHandelr}) {
  return (
    <div>
      <li className={styles.item}>
                
    <p>{name}  {lastName}</p>
    <p><span>📬 {email}</span></p>
    <p><span>📞 {phone}</span></p>
    <button onClick={()=>deleteHandelr(id)}> 🗑️</button>
    </li></div>
  )
}

export default Contacsitem