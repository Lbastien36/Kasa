import React from 'react';
import EtoileRouge from './EtoileRouge.png'
import EtoileGrise from './EtoileGrise.png'

const Notation = ({ notation }) => {


    const noteTotale = 5
    const nombreEtoileRouge = parseInt(notation)
    const nombreEtoileGrise = noteTotale - nombreEtoileRouge

    return (
        <div className='div-etoiles'>

            {[...Array(nombreEtoileRouge)].map((EtoileR, ArrayRouge) => (
                <img key={ArrayRouge} src={EtoileRouge} className='etoiles' alt='Etoile rouge'/>

            ))}

            {[...Array(nombreEtoileGrise)].map((EtoileG, ArrayGris) => (

                <img key={ArrayGris} src={EtoileGrise} className='etoiles' alt='Etoile Grise' />
            ))}

        </div>
    );
};

export default Notation;