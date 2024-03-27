import React from 'react';
import '../../index.css'
import Collapse from '../../Composants/Collapse/Collapse'
import Illustration2 from './Illustration 2.png'

const Apropos = () => {


    const apropos = [
        {
            "id": "1",

            "titre": "Fiabilité",

            "contenu": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."

        },
        {
            "id": "2",

            "titre": "Respect",

            "contenu": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."

        },
        {
            "id": "3",

            "titre": "Service",

            "contenu": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."

        },
        {
            "id": "4",

            "titre": "Sécurité",

            "contenu": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

        }
    ]


    
    return (
        <section className='section-a-propos'>

            <div className='banniere'>

                <img src={Illustration2} alt="Illustration de la bannière" className='illustration2' />

            </div>

            {apropos.map(a_propos => {

                return (

                    <Collapse key={a_propos.id} titre={a_propos.titre} contenu={a_propos.contenu} style={{width:  "65%"}} />

                )
            }


            )}



        </section>
    );
};

export default Apropos;