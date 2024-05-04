import './DefaultPageNav.scss';
import { navItems } from '../../../routes/router';

function DefaultPageNav() {

    return (
        <nav className='DefaultPageNav'>
            <div className='NavItems'>
                <div className='NavMiniLogo'>
                    <a href='/'>
                        <img src='' alt='Mini logo'></img>
                    </a>
                </div>
                {navItems.map((navItem, i) => <a href='navItem'>{navItem.text + [i]}</a>)}


                
            </div>
        </nav>
    )
}

export default DefaultPageNav;