import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'

function Presentation(){
    return(
      <div className={styles.presentation} id='Presentation'>
        <h4><strong> Bem-vindo ao meu Portifólio</strong></h4>
        <h1> Olá, me chamo Ricardo Luiz.</h1>
        <h6> mas pode me chamar de Juh</h6>
        <p>Sou universitário, cursando Engenharia da Computação pela Univesp<br/>
        Comecei a trabalhar ainda como menor aprendiz na Industria metalúrgica, me tornei mais organizado e passei a planejar as tarefas consegui de melhor forma, garantindo meu lugar e passei de menor aprendiz para, auxiliar, estoquista e por fim coordenador de estoque e comprador.<br/>
        Construí minha carreira melhorando, desenvolvendo ferramentas para acelerar e facilitar o processo como também o produto através estudos, experiência e sim, erros. Aplicando o conhecimento, idealizei algumas ferramentais em Excel, Power-bi e AppWEB's.<br/>
        <br/>Atualmente atuo como designer e desenvolvedor autônomo, mas espero embreve estar Trabalhando com você</p>
        <ButtonA text='Conecte-se comigo!' link='https://www.linkedin.com/in/ricardoluizjr/'  target='_blank'/>
      </div> 
    )
}

export default Presentation