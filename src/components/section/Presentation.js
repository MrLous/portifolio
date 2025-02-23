import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { FaWhatsapp } from "react-icons/fa";

function Presentation(){
    return(
      <div className={styles.presentation} id='Presentation'>
        <h4><strong> Bem-vindo ao meu Portifólio</strong></h4>
        <h1> Olá, me chamo Ricardo Luiz.</h1>
        <h6> mas pode me chamar de Juh</h6>
        <p>Tenho um olhar analítico e investigativo para identificar padrões, erros e otimizações.<br/>
        Apaixonado por desafios e curiosidades, desenvolvi habilidades em análise de dados e<br/>
        automação para tomada de decisão, especialmente nas áreas de suprimentos e PCP.<br/><br/>
        Busco transformar informações em insights estratégicos,<br/>
        utilizando tecnologia e dados para melhorar processos e resultados.</p>
        <ButtonA text='Conecte-se comigo!' link='https://wa.me//551692925034'  title='whatsApp'  target='_blank'/>
      </div> 
    )
}
  

export default Presentation
