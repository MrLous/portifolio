import styles from  './Skills.module.css'
import javascriptImg from '../../image/skills/javascript.png'
import htmlImg from '../../image/skills/html.png'
import cssImg from '../../image/skills/css.png'
import reactImg from '../../image/skills/react.png'
import powerbiImg from '../../image/skills/power-bi.png'
import inkscapeImg from '../../image/skills/inkscape.png'
import netImg from '../../image/skills/net.png'


function Skills(){
    return(
      <div className={styles.skill} id='Skill'>
        <h1> Habilidades</h1>
        <p>Conheça um pouco das minhas principais habilidades e conhecimentos </p>
        <div className={styles.tech}>
          <img src={powerbiImg} className={styles.white} alt="Power-BI" />
          <img src={javascriptImg} className={styles.yellow} alt="JavaScript" />
          <img src={htmlImg} className={styles.orange} alt="HTML"/>
          <img src={cssImg} className={styles.blue} alt="CSS" />
          <img src={reactImg} className={styles.gray} alt="React" />
          <img src={netImg} className={styles.purple} alt=".Net" />
          <img src={inkscapeImg} className={styles.white} alt="Inkscape" />
        </div>
      </div>  
    )
}

export default Skills