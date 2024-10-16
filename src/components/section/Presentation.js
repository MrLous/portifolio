import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return(
      <div className={styles.presentation} id='Presentation'>
        <h4><strong> Bem-vindo ao meu Portifólio</strong></h4>
        <h1> Olá, me chamo Ricardo Luiz.</h1>
        <h6> mas pode me chamar de Juh</h6>
        <p>Meu modo de atuar sempre foi em busca de melhorias de um modo geral,<br/>
         e tentando solucionar alguns problemas através da construção de planilhas, nasceu o gosto pela programação..<br/>
        Ao passar do tempo, entendi que não apenas o programa precisa ser estruturado, mas o processo como um todo, desde a primeira informação,<br/>
         ou seja, o problema a ser solucionado, e com isso, me aprofundei mais em Análises de dados e Desenvolvimento de Sistemas.<br/>
        <br/>Busco constante melhorar e com isso aguardo uma oportunidade para essa evolução.</p>
        <ButtonA text='Conecte-se comigo!' link='https://www.linkedin.com/in/ricardoluizjr/'  target='_blank'/>
      </div> 
    )
}

export default Presentation