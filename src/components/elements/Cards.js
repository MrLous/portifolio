import styles from '../elements/Cards.module.css'
import ButtonB from '../elements/ButtonB'



function Cards({img, title, tech, descripion, repo, site}){
    return (
        <div className={styles.cards}>
            <a href={site} target='_blank'>
                <img src={img}/>
            </a>
            <section>
                <h3>{title}</h3>
                <p>{tech}</p>
                <p>{descripion}</p>
                <ButtonB text="Acesse me repositório" link={repo} target='_blank'/>
            </section>
        </div>
    )
}

export default Cards


