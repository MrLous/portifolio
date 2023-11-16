import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return(
      <div className={styles.presentation} id='Presentation'>
        <h4><strong> Bem-vindo ao meu Portifólio</strong></h4>
        <h1> Olá, me chamo Ricardo Luiz.</h1>
        <h6> mas pode me chamar de Juh</h6>
        <p>Sou universitário, cursando Engenharia da Computação pela Univesp<br/>
        Comecei a trabalhar ainda como menor aprendiz na Industria metalúrgica, me tornei mais organizado e passei a planejar as tarefas conseguindo melhorar meus projetos e otimizando as entregas, garantindo meu lugar. Passei de menor aprendiz para auxiliar, estoquista, coordenador de estoque e comprador.<br/>
        Construí minha carreira melhorando e desenvolvendo, aplicativos e ferramentas para acelerar o processo fazendo uma gestão mais fiel com rápidas tomadas de decisões, essa evolução se deu através estudos, experiência e sim, erros.<br/>
        <br/>Atualmente atuo como designer e desenvolvedor autônomo, mas espero embreve estar Trabalhando com você</p>
        <ButtonA text='Conecte-se comigo!' link='https://www.linkedin.com/in/ricardoluizjr/'  target='_blank'/>
      </div> 
    )
}

export default Presentation