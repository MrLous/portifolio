import {useState} from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaRProject, FaPhp, FaJsSquare, FaPython, FaMountain, FaFigma, FaUserGraduate, FaGamepad, FaFileAlt} from "react-icons/fa";
// https://react-icons.github.io/react-icons/
import { SiPowerbi, SiMysql, SiGodotengine, SiTableau } from "react-icons/si";
import { IoIosConstruct } from "react-icons/io";
import styles from '../section/Projects.module.css'
import Cards from '../elements/Cards'
import crud from '../../image/projects/CRUF.PNG'
import dnc from '../../image/projects/DNC.PNG'
import detona from '../../image/projects/detona.PNG'
import piano from '../../image/projects/PIANO.PNG'
import cardJKP from '../../image/projects/card.png'
import memory from '../../image/projects/memory.png'
import ButtonBig from '../elements/ButtonBig'
import terminal from '../../image/projects/terminal.png'
import dataAny from '../../image/certificates/dataAny.png'
import front from '../../image/certificates/front.png'
import devgames from '../../image/certificates/games.png'
import powerBi from '../../image/certificates/power-bi.png'
import graduacaoIOT from '../../pdf/CERTIFICADO BTIIC.pdf'
import Logounivesp from '../../image/Univesp.png'

var textButtonsCard = "Acesse meu repositório";

function Projects(){
  
  //variaveis de inicio
  const [viewCard, setViewCard] = useState("Projetos");
  const [styleProject, setStyleProject] = useState("click");
  const [styleGame, setStyleGame] = useState("");
  const [styleCursos, setStyleCursos] = useState("");
  const [styleGraduacao, setStyleGraduacao] = useState("");
  const iconSize = 30;
  const btnIconSize = 30;

  //Icones skil
  const iconHTML = <FaHtml5 color='#E54D26' size={iconSize}/>;
  const iconCSS = <FaCss3Alt color='#2684C4' size={iconSize}/>;
  const iconJavaScripit = <FaJsSquare color='#E9CA32' size={iconSize}/>;
  const iconPHP = <FaPhp color='#2684C4' size={iconSize}/>;
  const iconInkscap = <FaMountain color='#E2E7E2' size={iconSize}/>;
  const iconFigma = <FaFigma color='#EE1892' size={iconSize} />;
  const iconReact = <FaReact color='#8ED487' size={iconSize}/>;
  const iconSQL = <SiMysql color='#2684C4' size={iconSize}/>;
  const iconR = <FaRProject color='#2684C4' size={iconSize}/>;
  const iconPython = <FaPython color='#2684C4' size={iconSize}/>;
  const iconPowerBi = <SiPowerbi color='#E9CA32' size={iconSize}/>;
  const iconGodot = <SiGodotengine color='#2684C4' size={iconSize}/>;
  const iconTableu = <SiTableau color='#E2E7E2' size={iconSize}/>;

  //icon buttons
  const btnGraducao = <FaUserGraduate size={btnIconSize}/>;
  const btnProjetos = <IoIosConstruct size={btnIconSize}/>;
  const btnCursos = <FaFileAlt size={btnIconSize}/>;
  const btnGames = <FaGamepad size={btnIconSize}/>;


  // atualizar os cards de projeto
  function viewProject (){
    setViewCard("Projetos");
    setStyleProject("click");
    setStyleGame("");
    setStyleCursos("");
    setStyleGraduacao("");
    textButtonsCard = "Acesse meu repositório";
  }
  function viewGame (){
    setViewCard("Games");
    setStyleProject("");
    setStyleGame("click");
    setStyleCursos("");
    setStyleGraduacao("");
    textButtonsCard = "Acesse meu repositório";
  }
  function viewCursos(){
    setViewCard("Cursos");
    setStyleProject("");
    setStyleGame("");
    setStyleCursos("click");
    setStyleGraduacao("");
    textButtonsCard = "Conheça a Escola";
  }
  function viewGraduacao(){
    setViewCard("Graduação");
    setStyleProject("");
    setStyleGame("");
    setStyleCursos("");
    setStyleGraduacao("click");
    textButtonsCard = "Conheça a Faculdade";
  }

  //retornar cards

    return(
      <div id='Projects' className={styles.projects}>
        <div className={styles.selectCards}>
          <ButtonBig text="  Projetos" functionClick={viewProject} style={styleProject} id="btnProjetos" btnIcon={btnProjetos}/>
          <ButtonBig text="  Games" functionClick={viewGame} style={styleGame} id="btnGames" btnIcon={btnGames}/>
          <ButtonBig text="  Cursos" functionClick={viewCursos} style={styleCursos} id="btnCursos" btnIcon={btnCursos}/>
          <ButtonBig text="  Graduação" functionClick={viewGraduacao} style={styleGraduacao} id="btnGraduacao" btnIcon={btnGraducao}/>
        </div>
        { viewCard ===  "Projetos" &&
        ( <>
          <Cards
          img={dnc}
          title = "Leading Page"
          tech = {[iconHTML, iconCSS]}
          descripion = "Desenvolvimento de uma Leading Page para formação pela escola DNC "
          repo = 'https://github.com/MrLous/ProjetoDNC01'
          site =  'https://projetolearningdnc.netlify.app/'
          buttonSite = {textButtonsCard}
          />
          <Cards
          img = {crud}
          title = "C.R.U.D"
          tech = {[iconHTML,iconCSS, iconPHP, iconInkscap]}
          descripion = "Gerenciador de tarefas simples com controle de status e dinamico"
          repo = 'https://github.com/MrLous/crud-task'
          site = " "
          buttonSite = {textButtonsCard}
          />
          <Cards
          img = {terminal}
          title = "Terminal de Retirada"
          tech = {[iconHTML, iconCSS, iconJavaScripit, iconInkscap]}
          descripion = "Terminal de Retirada para movimentação de peças do almoxarifado"
          repo = 'https://github.com/MrLous/Terminal_Simples-sheetMonkey'
          site = "https://terminal-danplas.netlify.app/"
          buttonSite = {textButtonsCard}
          />
          </>
         )
        }

        {  viewCard ===  "Games" &&
        ( <>
          <Cards
          img = {piano}
          title = "Piano Digital"
          tech = {[iconHTML, iconCSS, iconJavaScripit]}
          descripion = "Simulador para praticar em qualquer lugar."
          repo = 'https://github.com/MrLous/piano-digital'
          site = "https://mrlous.github.io/piano-digital/"
          buttonSite = {textButtonsCard}
          />
          <Cards
          img = {memory}
          title = "Jogo da Memóra"
          tech = {[iconHTML, iconCSS, iconJavaScripit, iconInkscap]}
          descripion = "Game para Testa sua memoria, tier um print e compartilhe seu melhro tempo"
          repo = 'https://github.com/MrLous/memory-game'
          site = "https://memory-card-dio.netlify.app"
          buttonSite = {textButtonsCard}
          />
           <Cards
          img = {detona}
          title = "Detona Ralph"
          tech = {[iconHTML, iconCSS, iconJavaScripit, iconInkscap]}
          descripion = "Game para aliviar do stres do dia a dia."
          repo = 'https://github.com/MrLous/crud-task'
          site = "https://sprightly-bienenstitch-4aaaf2.netlify.app"
          buttonSite = {textButtonsCard}
          /> 
          <Cards
          img = {cardJKP}
          title = "Card Game"
          tech = {[iconHTML, iconCSS, iconJavaScripit, iconInkscap]}
          descripion = "Game para testar sua mente e coração, mas é só um jokenpo mesmo."
          repo = 'https://github.com/MrLous/Card-Game'
          site = "https://mrlous.github.io/Card-Game/"
          buttonSite = {textButtonsCard}
          />
          </>
          )
        }

        {  viewCard ===  "Cursos" &&
        ( <>
          <Cards
          img = {front}
          title = "Front-End com React.js"
          tech = {[iconHTML, iconCSS, iconJavaScripit,iconFigma, iconReact]}
          descripion = "Curso Oferecido pela escola DNC, com 40h, concluido DEZ/2023."
          repo = "https://ed.escoladnc.com/formacoes-g/?utm_source=adwords&utm_medium=paid&utm_campaign=hr-ga-geral-312-1&utm_content=hr-ga-geral-312-1-1&utm_term=dnc&utm_term=dnc&utm_campaign=%5B312%5D%5BOP%5D%5BHR%5D%5BGeral%5D%5BSearch%5D&utm_source=adwords&utm_medium=ppc&hsa_acc=1620955800&hsa_cam=21542018591&hsa_grp=165520193733&hsa_ad=708070867381&hsa_src=g&hsa_tgt=kwd-13228606&hsa_kw=dnc&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwpbi4BhByEiwAMC8JnaiD7UCZ5hkR3JIZNTEGqbqESuXYBWI0-u-9_vwGGrvjVihKQkzRqhoCSEUQAvD_BwE"
          site = {front}
          buttonSite = {textButtonsCard}
          />
          <Cards
          img = {devgames}
          title = "Desenvolvedor de Jogos"
          tech = {[iconHTML, iconCSS, iconJavaScripit, iconInkscap,iconGodot]}
          descripion = "Curso Oferecido pela escola DIO, com 77h, concluido DEZ/2023"
          repo = "https://www.dio.me/"
          site = {devgames}
          buttonSite = {textButtonsCard}
          />
          <Cards
          img = {dataAny}
          title = "Data Analytics"
          tech = {[iconSQL, iconR, iconTableu]}
          descripion = "Curso Oferecido pela escola Coursera/Google, com 120h, concluido MAR/2023."
          repo = "https://www.coursera.org/courseraplus/?utm_medium=sem&utm_source=gg&utm_campaign=B2C_LATAM_coursera_FTCOF_courseraplus&campaignid=20844412474&adgroupid=159999536361&device=c&keyword=coursera&matchtype=b&network=g&devicemodel=&adposition=&creativeid=683667892738&hide_mobile_promo&gad_source=1&gclid=CjwKCAjwpbi4BhByEiwAMC8JndRXMNurKZ5rzi6_MuY-QhXaQG6Rpofo18cfEa0Qhuj1f6fWjWGfChoCYm4QAvD_BwE"
          site = {dataAny}
          buttonSite = {textButtonsCard}
          />
           <Cards
          img = {powerBi}
          title = "Data Analytics com Power-Bi"
          tech = {[iconSQL, iconR, iconPython, iconPowerBi]}
          descripion = "Curso Oferecido pela escola Dio, com 82h, concluido SET/2024."
          repo = "https://www.dio.me/"
          site = {powerBi}
          buttonSite = {textButtonsCard}
          />
          </>
          )
        }
        {  viewCard ===  "Graduação" &&
          ( <>
            <Cards
            img = {Logounivesp}
            title = "Engenharia da Computação"
            tech = {""}
            descripion = "Formação Oferecida pela escola Univesp, com 4400h, Previsão Ago/2026"
            repo = "https://univesp.br/"
            site = "https://univesp.br/"
            buttonSite = {textButtonsCard}
            />
            <Cards
            img = {Logounivesp}
            title = "Bacharelado em Tecnologia da Informação - ênfase em IOT"
            tech = {""}
            descripion = "Formação Oferecida pela escola Univesp, com 2600h, concluido Ago/2024"
            repo = "https://univesp.br/"
            site = {graduacaoIOT}
            buttonSite = {textButtonsCard}
            />
            </>
            )
          }
      </div>  
    )
}
export default Projects
