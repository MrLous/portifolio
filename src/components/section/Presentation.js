import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return(
      <div className={styles.presentation} id='Presentation'>
        <h4><strong> Bem-vindo ao meu Portifólio</strong></h4>
        <h1> Olá, me chamo Ricardo Luiz.</h1>
        <h6> mas pode me chamar de Juh</h6>
        <p>Minha atuação consiste em desenvolver melhorias de forma integralizada,<br/>
        fazendo um minucioso levantamento das informações e analisando o processo <br/>
        como um todo, entregando assim, um resultado assertivo.<br/><br/>
        Estou em constante melhoria teórica nas áreas de análises de dados e<br/>
        Desenvolvimento de sistemas, busco uma oportunidade para a prática dos resultados.</p>
        <ButtonA text='Conecte-se comigo!' link='https://wa.me//551692925034'  target='_blank'/>
      </div> 
    )
}
  
 


export default Presentation