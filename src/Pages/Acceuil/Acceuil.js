import Illustration from './Illustration.png'
import '../../index.css'

import logements from '../../logements.json'


console.log(logements)

const Acceuil = () => {


    return (

        <section className='section-accueil'>

            <div className='banniere'>

                <img src={Illustration} alt="Illustration de la bannière" className='illustration' />

                <h1 className='slogan'>Chez vous, partout et ailleurs</h1>

            </div>
            <div className='fondgris'>

                {
                    logements.map((logement) => (

                        <article key={logement.id } className='carte'>

                            <img src={logement.cover} className='vignette' />
                            <p className='titre-logement'>{logement.title}</p>

                        </article>


                    ))
                }
            </div>

        </section>

    )

}



export default Acceuil