import React from 'react';
import '../../index.css'
import { Link } from 'react-router-dom';

const Erreur404 = () => {
    return (
        <section className='section-404'>
        <p className='erreur404'>404</p>

        <p className='oups'>Oups! la page que vous demandé n'existe pas.</p>

        <Link to='/' className='revenir'>Revenir sur la page d'acceuil</Link>

        </section>
    );
};

export default Erreur404;