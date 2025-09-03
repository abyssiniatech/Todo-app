"use client"
import styles from "../styles/Footer.module.css"

const  Footer =() =>{
     return(
           <div className={styles.Footer}>

                <p>&copy; {new Date().getFullYear()} | surafel Mengist</p>
           </div>
     )
}
export default Footer