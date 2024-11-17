import styles from './ButtonBig.module.css'

function ButtonBig({text, functionClick, style, id, btnIcon}){


  return(
    <div>
      { style == "click" ?
      (
        <button className={styles.btnBigClick} onClick={functionClick} id={id}>{[btnIcon, text]}</button>
      ):(
      <button className={styles.btnBig} onClick={functionClick} id={id}>{[btnIcon, text]}</button>
      )
      }
      </div>  
  )
}

export default ButtonBig