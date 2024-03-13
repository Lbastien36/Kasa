import { NavLink } from 'react-router-dom'
import LogoRouge from './LogoRouge.png'
import  '../../index.css'



const NavBar = () => {

    return (

        <header>

            <img src={LogoRouge} className='LogoRouge' alt='Logo Kasa' />

            <nav>

                <NavLink to='/' className='lien'>
                    Acceuil
                </NavLink>


                <NavLink to='/a-propos' className='lien'>
                    A propos
                </NavLink>

            </nav>

        </header>


    )
}

export default NavBar