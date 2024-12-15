import Cards from '../elements/Cards'

//var workJson = new Object(require('../projects/db.json'));
import workJson from '../projects/db'




function Works( {projectsCard, textButtons}){
    // varial que carregar os cartoes
    var viewCard = [];

    workJson.forEach((classes, index) => {
        if(classes.class === projectsCard){
            viewCard.push(
                <div className='divCard' id={viewCard.length}>
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
            }
        })

    return(
        <>  
            <div className='Carrossel'>
                {viewCard}
            </div>
        </>
    )
    }

export default Works