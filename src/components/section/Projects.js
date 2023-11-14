import styles from '../section/Projects.module.css'
import Cards from '../elements/Cards'
import crud from '../../image/projects/CRUF.PNG'
import dnc from '../../image/projects/DNC.PNG'
import danplas from '../../image/projects/danplas.PNG'
import javascriptImg from '../../image/skills/javascript.png'
import htmlImg from '../../image/skills/html.png'
import cssImg from '../../image/skills/css.png'
import reactImg from '../../image/skills/react.png'
import powerbiImg from '../../image/skills/power-bi.png'
import inkscapeImg from '../../image/skills/inkscape.png'

function Projects(){
    return(
      <div id='Projects' className={styles.projects}>
        <h1>Projetos</h1>
        <Cards
        img={crud}
        title = "C.R.U.D"
        tech = "PHP, JS, HTML, CSS e iks"
        descripion = "Gerenciador de tarefas simples com controle de status e dinÂmico"
        repo = 'https://github.com/MrLous/crud-task'
        site = " "
        />
        <Cards
        img={dnc}
        title = "Leading Page"
        tech = "HTML e CSS"
        descripion = "Desenvolvimento de uma Leading Page para formação pela escola DNC "
        repo = 'https://github.com/MrLous/ProjetoDNC01'
        site = 'https://projetolearningdnc.netlify.app/'
        />
        <Cards
        img={danplas}
        title = "Terminal de Retirada de Itens"
        tech = "HTML, JS, CSS e iks"
        descripion = "Ferramenta desenvolvida para automatizar a Saida de Materiais do almoxarifado."
        repo = 'https://github.com/MrLous/terminal'
        site = "https://sprightly-bienenstitch-4aaaf2.netlify.app"
        />
      </div>  
    )
}




export default Projects