import React, { useState } from 'react'
import inputs from '../contacts/input'
import Cntactlist from './Cntactlist'
import { v4 as uuidv4 } from 'uuid';
import styles from './Contact.module.css'


function Contact() {
    const [contacts ,setContacts]=useState([])
    const [alert ,setAlert]=useState("")
    const [contact ,setContact]=useState({
        id:"",
        name:"",
        lastName:"",
        email:"",
        phone:""
    })
    const chengHandelr= (event)=>{
        const name=event.target.name
        const value=event.target.value
        setContact( contact=> ({...contact,[name]:value}))
    
    }
    const addHandelr=()=>{
        if(!contact.name||
            !contact.lastName||
            !contact.email|| 
            !contact.phone)
            {
            setAlert(" please enter valid data!")
                return;
        }
        setAlert("")
        const newContact={...contact,id:uuidv4()}
        setContacts(contacts=>([...contacts,newContact]))
        setContact({
            name:"",
            lastName:"",
            email:"",
            phone:""
        })
    }
    const deleteHandelr=(id)=>{
       const newContacts=contacts.filter((contact)=>(contact.id!==id))
       setContacts(newContacts)
    }
  return (
    <div className={styles.container}  >
        <div className={styles.form}>
            {inputs.map((input, index)=>( <input 
            key={index}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                value={contact[input.name]}
                onChange={chengHandelr}/>))}

               <button onClick={addHandelr}>Add Contact</button>
             <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
             <Cntactlist contacts={contacts} deleteHandelr={deleteHandelr}/>
        </div>
    </div>
  )
}

export default Contact