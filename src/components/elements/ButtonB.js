import styles from './ButtonB.module.css'

function ButtonB({text, link, target}){
  return(
    <div>
      <a href={link} target={target}>
      <button className={styles.btn}>{text}</button>
      </a>
    </div>  
  )
}

export default ButtonB