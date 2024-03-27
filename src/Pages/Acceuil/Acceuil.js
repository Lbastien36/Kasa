import Illustration from './Illustration.png'
import '../../index.css'

import logements from '../../logements.json'
import {NavLink } from 'react-router-dom'


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
                        <NavLink key={logement.id} to={`/logement/${logement.id}`}>
                            <article className='carte' >

                                <img src={logement.cover} className='vignette' />
                                <p className='titre-logements'>{logement.title}</p>

                            </article>
                        </NavLink>

                    ))
                }
            </div>

        </section>

    )

}



export default Acceuil