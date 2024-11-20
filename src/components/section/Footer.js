import Contact from '../elements/Contact'
import styles from './Footer.module.css'

function Footer(){
    return(
      <div className={styles.footer}>
        <Contact id='contactFooter'/>
        <p>ricardoluizjr@live.com</p>
        <p>Ricardo Luiz Junior</p>
        <p>desde © 2023</p>
      </div>  
    )
}

export default Footer