import {useState} from 'react'
import Cards from '../elements/Cards'
import styles from './works.module.css'
import ButtonCarrossel from '../elements/ButtonCarrossel';

//let workJson = new Object(require('../projects/db.json'));
import workJson from '../projects/db'

let cardOnView = 0;
let workchange = " ";

function setListView (projectsCard){
    if (workchange === projectsCard){
        cardOnView = 0;
        workchange = projectsCard;
    }
}


function Works( {projectsCard, textButtons}){
    // varial que carregar os cartoes
    let listCard = [];

    //setar os cartoes
    setListView(projectsCard);

    const [viewCard, setViewCard] = useState(0);

    //funções de troca de cartão.
    function direita(){
       console.log(listCard, viewCard)
        if((cardOnView+1) >= listCard.length){
            cardOnView = 0;
        }else{
            cardOnView++;
        }
        setViewCard(cardOnView);
    }
    function esquerda(){
        if(cardOnView <= 0){
            cardOnView = listCard.length-1;
        }else{
            cardOnView--;
        }
        setViewCard(cardOnView);
    }

    // add lista de cartões no grupo especifico
    workJson.forEach(classes => {
        if(classes.class === projectsCard){
            listCard.push(
                listCard.length === viewCard ? (
                    <div className={styles.carrosselView}>
                        <Cards
                        img={classes.image}
                        title = {classes.title}
                        tech = {classes.tech}
                        descripion = {classes.descripion}
                        repo = {classes.repo}
                        site =  {classes.site}
                        buttonSite = {textButtons}
                        />
                    </div>
                ):(
                    <div className={styles.carrosselNotView}>
                        <Cards
                        img={classes.image}
                        title = {classes.title}
                        tech = {classes.tech}
                        descripion = {classes.descripion}
                        repo = {classes.repo}
                        site =  {classes.site}
                        buttonSite = {textButtons}
                        />
                    </div> 
                )
            )}
        })

    return(

        <>  
            <div className={styles.carrossel}>
                <ButtonCarrossel direction='Direita' functionClick={direita}/>
                {listCard}
                <ButtonCarrossel direction='Esquerda' functionClick={esquerda}/>
            </div>
        </>
    )
}

export default Works