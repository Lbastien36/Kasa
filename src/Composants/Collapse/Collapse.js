import React, { useState } from 'react';
import FlecheCollapse from './FlecheCollapse.png'


const Collapse = ({ titre, contenu, style }) => {

    const [ouverture, setOuverture] = useState(false)

    return (

        <div className="collapse" >
            <div className='collapse-titre'>

                <h3>{titre}</h3>

                <img className={ouverture ? 'fleche-haut' : 'fleche-bas'}
                    onClick={() => setOuverture(!ouverture)} src={FlecheCollapse} alt="fleche collapse" />

            </div>

            <div className={ouverture ? 'collapse-contenu' : 'collapse-cache'}>

                {Array.isArray(contenu) ? contenu.map((Contenu, indexContenu) => {
                    return (<p key={indexContenu} className='collapse-contenu-p'>{Contenu}</p>)
                })

                    : <p className='collapse-contenu-p' >{contenu}</p>

                }

            </div>
        </div>

    )
};

export default Collapse;