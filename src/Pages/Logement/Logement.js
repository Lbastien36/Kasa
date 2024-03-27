import React from 'react';
import '../../index.css'
import logements from '../../logements.json'
import { useParams, Navigate } from 'react-router-dom';

import Tag from '../../Composants/Tag/Tag'
import Notation from '../../Composants/Notation/Notation';
import Carrousel from '../../Composants/Carrousel/Carrousel';
import Collapse from '../../Composants/Collapse/Collapse';

const Logement = () => {
    const { id } = useParams();

    const CeLogement = logements.find(logement => logement.id === id);

    console.log(CeLogement)
    
    
    return <> {CeLogement ? (
        <section className='section-logement'>

            <Carrousel imageCarrousel={CeLogement.pictures} />

            <div className='titre-hote'>
                <div>
                    <h2 className='titre-logement'>{CeLogement.title}</h2>
                    <p className='location-logement'>{CeLogement.location}</p>

                </div>

                <div className='hote'>
                    <p className='nom-hote'>{CeLogement.host.name}</p>
                    <img src={CeLogement.host.picture} className='picture' alt='Hôte' />

                </div>
            </div>

            <div className='tags-notation'>

                <Tag tags={CeLogement.tags} />

                <Notation notation={CeLogement.rating} />
            </div>

            <div className='Collapses'>
                <Collapse titre={'Description'} contenu={CeLogement.description} />

                <Collapse titre={'Équipements'} contenu={CeLogement.equipments} />

            </div>
        </section>
    ) : <Navigate replace to="/Erreur404" />} </>;

};

export default Logement;