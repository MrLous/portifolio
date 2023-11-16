import styles from '../section/Projects.module.css'
import Cards from '../elements/Cards'
import crud from '../../image/projects/CRUF.PNG'
import dnc from '../../image/projects/DNC.PNG'
import detona from '../../image/projects/detona.PNG'

function Projects(){
    return(
      <div id='Projects' className={styles.projects}>
        <h1>Projetos</h1>
        <Cards
        img={dnc}
        title = "Leading Page"
        tech = "HTML e CSS"
        descripion = "Desenvolvimento de uma Leading Page para formação pela escola DNC "
        repo = 'https://github.com/MrLous/ProjetoDNC01'
        site = 'https://projetolearningdnc.netlify.app/'
        />
        <Cards
        img={detona}
        title = "detona ralph"
        tech = "HTML, JS, CSS e iks"
        descripion = "Game para aliviar do stres do dia a dia."
        repo = 'https://github.com/MrLous/detona-ralph'
        site = "https://sprightly-bienenstitch-4aaaf2.netlify.app"
        />
        
        <Cards
        img={crud}
        title = "C.R.U.D"
        tech = "PHP, JS, HTML, CSS e iks"
        descripion = "Gerenciador de tarefas simples com controle de status e dinÂmico"
        repo = 'https://github.com/MrLous/crud-task'
        site = " "
        />
      </div>  
    )
}




export default Projects