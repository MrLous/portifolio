import { FaWhatsapp, FaLinkedin, FaGithub, FaRegFilePdf } from "react-icons/fa";
import styles from './Footer.module.css'
import curriculo from '../../pdf/Curriculo .pdf'

function Footer(){
    return(
      <div className={styles.footer}>
        <ul>
            <li className={styles.pdf}><a href={curriculo} target='_blank'><FaRegFilePdf size={30}/></a></li>
            <li className={styles.whatsapp}><a href='https://wa.me//551692925034' target='_blank'><FaWhatsapp size={30} /></a></li>
            <li className={styles.git}><a href='https://github.com/MrLous' target='_blank'><FaGithub size={30}/></a></li>
            <li className={styles.linkdin}><a href='https://www.linkedin.com/in/ricardoluizjr/' target='_blank'><FaLinkedin size={30}/></a></li>
        </ul>
        <p>ricardoluizjr@live.com</p>
        <p> Ricardo Luiz © 2023</p>
      </div>  
    )
}

export default Footer