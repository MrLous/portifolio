import {useState} from 'react'
import styles from '../section/Projects.module.css'
import Cards from '../elements/Cards'
import crud from '../../image/projects/CRUF.PNG'
import dnc from '../../image/projects/DNC.PNG'
import detona from '../../image/projects/detona.PNG'
import piano from '../../image/projects/PIANO.PNG'
import memory from '../../image/projects/memory.png'
import ButtonBig from '../elements/ButtonBig'
import terminal from '../../image/projects/terminal.png'


function Projects(){
  
  
  const [viewCard, setViewCard] = useState("Projetos");
  const [styleProject, setStyleProject] = useState("click");
  const [styleGame, setStyleGame] = useState("");

  // atualizar os cards de projeto
  function viewProject (){
    setViewCard("Projetos");
    setStyleProject("click");
    setStyleGame("");
  }
  function viewGame (){
    setViewCard("Games");
    setStyleProject("");
    setStyleGame("click")
  }

    return(
      <div id='Projects' className={styles.projects}>
        <div className={styles.selectCards}>
          <ButtonBig text="Projetos" functionClick={viewProject} style={styleProject} id="btnProjetos"/>
          <ButtonBig text="Games" functionClick={viewGame} style={styleGame} id="btnGames"/>
        </div>
        { viewCard ==  "Projetos" &&
        ( <>
          <Cards
          img={dnc}
          title = "Leading Page"
          tech ="HTML e CSS"
          descripion = "Desenvolvimento de uma Leading Page para formação pela escola DNC "
          repo = 'https://github.com/MrLous/ProjetoDNC01'
          site =  'https://projetolearningdnc.netlify.app/'
          />
          <Cards
          img = {crud}
          title = "C.R.U.D"
          tech = "PHP, JS, HTML, CSS e iks"
          descripion = "Gerenciador de tarefas simples com controle de status e dinamico"
          repo = 'https://github.com/MrLous/crud-task'
          site = " "
          />
          <Cards
          img = {terminal}
          title = "Terminal de Retirada"
          tech = "JS, HTML, CSS e iks"
          descripion = "Terminal de Retirada para movimentação de peças do almoxarifado"
          repo = 'https://github.com/MrLous/Terminal_Simples-sheetMonkey'
          site = "https://terminal-danplas.netlify.app/"
          />
          </>
         )
        }

        {  viewCard ==  "Games" &&
        ( <>
          <Cards
          img = {piano}
          title = "Piano Digital"
          tech = "HTML, JS e CSS"
          descripion = "Simulador para praticar em qualquer lugar."
          repo = 'https://github.com/MrLous/piano-digital'
          site = "https://mrlous.github.io/piano-digital/"
          />
          <Cards
          img = {memory}
          title = "Jogo da Memóra"
          tech = "HTML, JS, CSS e iks"
          descripion = "Game para Testa sua memoria, tier um print e compartilhe seu melhro tempo"
          repo = 'https://github.com/MrLous/memory-game'
          site = "https://memory-card-dio.netlify.app"
          />
           <Cards
          img = {detona}
          title = "Detona Ralph"
          tech = "HTML, JS, CSS e iks"
          descripion = "Game para aliviar do stres do dia a dia."
          repo = 'https://github.com/MrLous/crud-task'
          site = "https://sprightly-bienenstitch-4aaaf2.netlify.app"
          />
          </>
          )
        }
      </div>  
    )
}
export default Projects
