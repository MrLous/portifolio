import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav'
import Contact from '../elements/Contact';

function Navbar(){
    return(
      <div className={styles.navbar}>
        <ul>
            <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
            <li><Nav.Link href='#Skill'>Habilidades</Nav.Link></li>
            <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
        </ul>
        <Contact/>
      </div>  
    )
}

//https://react-icons.github.io/react-icons/icons/fa/ - link to incons

export default Navbar