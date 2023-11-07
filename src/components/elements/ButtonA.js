import styles from './ButtonA.module.css'

function ButtonA({text, link, target}){
    return(
      <div>
        <a href={link} target={target}>
        <button className={styles.btn}>{text}</button>
        </a>
      </div>  
    )
}

export default ButtonA