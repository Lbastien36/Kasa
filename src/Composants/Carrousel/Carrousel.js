import React, { useState } from 'react';
import FlecheDroite from './FlecheDroite.png'
import FlecheGauche from './FlecheGauche.png'

const Carrousel = ({ imageCarrousel }) => {

    const [gallerie, setGallerie] = useState(0)
    let totalImage = imageCarrousel.length

    const imagePrecedente = () => {
        if (gallerie === 0) {
            setGallerie(totalImage - 1)
        } else {
            setGallerie(gallerie - 1)
        }
        return (setGallerie);
    };

    const imageSuivante = () => {
        if (gallerie === totalImage - 1) {
            setGallerie(totalImage = 0)
        } else {
            setGallerie(gallerie + 1)
        }
        return (setGallerie)
    }



    return (
        <div className='carrousel'>

            {totalImage > 1 && <img src={FlecheGauche} onClick={imagePrecedente} className='flecheGauche' alt='Fleche de gauche' />}


            {imageCarrousel.map((image, carrousel) => {

                return (<img key={carrousel} src={image} className={carrousel === gallerie ? 'image-active' : 'image-inactive'} alt='Logement' />)
            })}
            {totalImage > 1 && <img src={FlecheDroite} onClick={imageSuivante} className='flecheDroite' alt='Fleche de droite' />}

            {totalImage > 1 && <p className='indexDePosition'>{gallerie + 1}/{totalImage}</p>}
        </div>
    );
};

export default Carrousel;