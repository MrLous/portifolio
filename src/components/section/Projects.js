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
import dataAny from '../../image/certificates/dataAny.png'
import front from '../../image/certificates/front.png'
import devgames from '../../image/certificates/games.png'
import powerBi from '../../image/certificates/power-bi.png'


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
          <ButtonBig text="Certificados" functionClick={viewCetificates} style={styleGame} id="btnGames"/>
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

        {  viewCard ==  "Certificados" &&
        ( <>
          <Cards
          img = {front}
          title = "Front-End com React.js"
          tech = "HTML, JS, CSS, FIGMA - REACT.js"
          descripion = "Curso Oferecido pela escola DNC, com 40h, concluido DEZ/2023."
          repo = 'black'
          site = "https://ed.escoladnc.com/formacoes-g/?utm_source=adwords&utm_medium=paid&utm_campaign=hr-ga-geral-312-1&utm_content=hr-ga-geral-312-1-1&utm_term=dnc&utm_term=dnc&utm_campaign=%5B312%5D%5BOP%5D%5BHR%5D%5BGeral%5D%5BSearch%5D&utm_source=adwords&utm_medium=ppc&hsa_acc=1620955800&hsa_cam=21542018591&hsa_grp=165520193733&hsa_ad=708070867381&hsa_src=g&hsa_tgt=kwd-13228606&hsa_kw=dnc&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwpbi4BhByEiwAMC8JnaiD7UCZ5hkR3JIZNTEGqbqESuXYBWI0-u-9_vwGGrvjVihKQkzRqhoCSEUQAvD_BwE"
          />
          <Cards
          img = {devgames}
          title = "Desenvolvedor de Jogos"
          tech = "HTML, JS, CSS, iks, Godot"
          descripion = "Curso Oferecido pela escola DIO, com 77h, concluido DEZ/2023"
          repo = 'black'
          site = "https://www.dio.me/"
          /><Cards
          img = {dataAny}
          title = "Data Analytics"
          tech = "SQL, R e Tableu"
          descripion = "Curso Oferecido pela escola Coursera/Google, com 120h, concluido MAR/2023."
          repo = 'black'
          site = "https://www.coursera.org/courseraplus/?utm_medium=sem&utm_source=gg&utm_campaign=B2C_LATAM_coursera_FTCOF_courseraplus&campaignid=20844412474&adgroupid=159999536361&device=c&keyword=coursera&matchtype=b&network=g&devicemodel=&adposition=&creativeid=683667892738&hide_mobile_promo&gad_source=1&gclid=CjwKCAjwpbi4BhByEiwAMC8JndRXMNurKZ5rzi6_MuY-QhXaQG6Rpofo18cfEa0Qhuj1f6fWjWGfChoCYm4QAvD_BwE"
          />
           <Cards
          img = {powerBi}
          title = "Data Analytics com Power-Bi"
          tech = "SQL, R, Python Power-Bi"
          descripion = "Curso Oferecido pela escola Dio, com 82h, concluido SET/2024."
          repo = 'black'
          site = "https://www.dio.me/"
          />
          </>
          )
        }
      </div>  
    )
}
export default Projects
