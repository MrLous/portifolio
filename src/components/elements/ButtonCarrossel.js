import styles from './ButtonCarrossel.module.css'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
// https://react-icons.github.io/react-icons/

const left = <MdOutlineArrowBackIos  size="50"/>
const right = <MdOutlineArrowForwardIos  size="50"/>

function ButtonCarrossel({direction, functionClick}){


  return(
    <div className={styles.divBtnCarrossel}>
      { direction === "Direita" ?
      (
        <div className={styles.btnCarrossel} onClick={functionClick}>{left}</div>
      ):(
        <div className={styles.btnCarrossel} onClick={functionClick}>{right}</div>
      )
      }
      </div>  
  )
}

export default ButtonCarrossel