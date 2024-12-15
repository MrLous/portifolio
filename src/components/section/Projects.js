import {useState} from 'react'
// https://react-icons.github.io/react-icons/
import {  FaUserGraduate, FaGamepad, FaFileAlt} from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";
import styles from '../section/Projects.module.css'
import Works from '../projects/works'
import ButtonBig from '../elements/ButtonBig'

var textButtonsCard = "Acesse meu repositório";
const btnIconSize = 30;

function Projects(){
  
  //variaveis de inicio
  const [viewCard, setViewCard] = useState("Projetos");
  const [styleProject, setStyleProject] = useState("click");
  const [styleGame, setStyleGame] = useState("");
  const [styleCursos, setStyleCursos] = useState("");
  const [styleGraduacao, setStyleGraduacao] = useState("");

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
        <Works projectsCard = {viewCard} textButtons = {textButtonsCard}/>
    </div>  
  )
}
export default Projects
