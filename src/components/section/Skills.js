
import styles from  './Skills.module.css'
import javascriptImg from '../../image/skills/javascript.png'
import htmlImg from '../../image/skills/html.png'
import cssImg from '../../image/skills/css.png'
import reactImg from '../../image/skills/react.png'
import powerbiImg from '../../image/skills/power-bi.png'
import inkscapeImg from '../../image/skills/inkscape.png'


function Skills(){
    return(
      <div className={styles.skill} id='Skill'>
        <h1> Habilidades</h1>
        <p>Conheça um pouco das minhas principais habilidades e conhecimentos </p>
        <div>
          <img src={inkscapeImg} />
          <img src={javascriptImg} />
          <img src={htmlImg} />
          <img src={cssImg} />
          <img src={reactImg} />
          <img src={powerbiImg} />
        </div>
      </div>  
    )
}

export default Skills