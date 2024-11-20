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
        <p>Conheça algumas das minhas habilidades e conhecimentos </p>
        <div className={styles.tech}>
          <img src={powerbiImg} className={styles.white} alt="Power-BI" title='Power-Bi'/>
          <img src={javascriptImg} className={styles.yellow} alt="JavaScript" title='JavaScripit' />
          <img src={htmlImg} className={styles.orange} alt="HTML" title='HTML-5'/>
          <img src={cssImg} className={styles.blue} alt="CSS" title='CSS3' />
          <img src={reactImg} className={styles.gray} alt="React" title='React.js' />
          <img src={netImg} className={styles.purple} alt=".Net" title='.Net' />
          <img src={inkscapeImg} className={styles.white} alt="Inkscape" title='Inkscape'/>
        </div>
      </div>  
    )
}

export default Skills