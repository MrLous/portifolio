import styles from './ButtonBig.module.css'

function ButtonBig({text, functionClick, style, id}){


  return(
    <div>
      { style == "click" ?
      (
        <button className={styles.btnBigClick} onClick={functionClick} id={id}>{text}</button>
      ):(
      <button className={styles.btnBig} onClick={functionClick} id={id}>{text}</button>
      )
      }
      </div>  
  )
}

export default ButtonBig