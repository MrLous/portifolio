import styles from '../elements/Cards.module.css'
import ButtonB from '../elements/ButtonB'


function Cards({img, title, tech, descripion, repo, site, buttonSite}){
    let siteLink= [];

    //carregar o link do site
    if( site === " "){
        siteLink.push(
        <a>
            <img src={img}/>
        </a>) 
    }else{
        siteLink.push(
        <a href={site} target="_blank">
            <img src={img}/>
        </a>
        )
    }
    return ( 
        <div className={styles.cards}>
            {siteLink}
            <section>
                <h3>{title}</h3>
                <p>{tech}</p>
                <p>{descripion}</p>
                <ButtonB text={buttonSite} link={repo} target="_blank"/>
            </section>
        </div>
    )
}
        

export default Cards;


