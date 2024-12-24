import {useEffect, useState} from 'react'
import Cards from '../elements/Cards'
import styles from './works.module.css'
import ButtonCarrossel from '../elements/ButtonCarrossel';

//let workJson = new Object(require('../projects/db.json'));
import workJson from '../projects/db'

let cardOnView = 0;

function Works( {projectsCard, textButtons, resetCard} ){

    const [viewCard, setViewCard] = useState(0);

    // varial que carregar os cartoes
    let listCard = []; 
    let listRadioButtons= [];

    function updateCarousel() {
        // Calcula a transformação com base no índice
        const offset = -cardOnView * 100; 
        styles.carrossel.transform = `translateX(${offset}%)`;
    }

    //funções de troca de cartão.
    function esquerda(){
        if((cardOnView+1) >= listCard.length){
            cardOnView = 0;
        }else{
            cardOnView++;
        }
        setViewCard(cardOnView);
    }

    function direita(){
        if(cardOnView <= 0){
            cardOnView = listCard.length-1;
        }else{
            cardOnView--;
        }
        setViewCard(cardOnView);
    }

    useEffect(() => {
        setViewCard(0);
        cardOnView = 0; 
    }, [resetCard]); 

    // add lista de cartões no grupo especifico
    workJson.forEach((classes, index) => {
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
            )
            listRadioButtons.push(
                (listCard.length-1) === viewCard ? (
                    <div className={styles.divRadioOn} >
                        <span class={styles.spanRaio}></span>
                    </div>
                ):(
                    <div className={styles.divRadioOff} >
                        <span class={styles.spanRaio}></span>
                    </div>  
                )
            )
        }
    })

    return(
        <div className={styles.works}>
            <div className={styles.carrossel}>
                <ButtonCarrossel direction='Direita' functionClick={direita}/>
                {listCard}
                <ButtonCarrossel direction='Esquerda' functionClick={esquerda}/>
            </div>
            <div className={styles.radios}>
                {listRadioButtons}
            </div> 
        </div>
    )
}

export default Works