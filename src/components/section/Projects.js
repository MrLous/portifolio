import styles from '../section/Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Cards from '../elements/cards'

function Projects(){
    return(
      <div id='Projects' className={styles.projects}>
        <h1>Projetos</h1>
        <Cards/>
        <ButtonB text="Acesse me repositório" link='https://github.com/MrLous/crud-task' target='_blank'/>
        <Cards/>
        <ButtonB text="Acesse me repositório" link='https://github.com/MrLous/terminal' target='_blank'/>
        <Cards/>
        <ButtonB text="Acesse me repositório" link='https://github.com/MrLous/ProjetoDNC01' target='_blank'/>
      </div>  
    )
}

export default Projects