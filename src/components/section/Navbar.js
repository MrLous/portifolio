import styles from './Navbar.module.css'
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
      <div className={styles.navbar}>
        <ul>
            <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
            <li><Nav.Link href='#Skill'>Habilidades</Nav.Link></li>
            <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
        </ul>
        <ul>
            <li id='whatsapp'><a href='https://wa.me//551692925034'><FaWhatsapp size={30} /></a></li>
            <li id='git'><a href='https://github.com/MrLous'><FaGithub size={30}/></a></li>
            <li id='linkedin'><a href='https://www.linkedin.com/in/ricardoluizjr/'><FaLinkedin size={30}/></a></li>
        </ul>
      </div>  
    )
}

export default Navbar