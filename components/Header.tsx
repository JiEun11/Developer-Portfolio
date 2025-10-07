import React from 'react';
import { useNavigation } from '../context/NavigationContext';

const Header = () => {
    const { page, setPage } = useNavigation();

    const handleNavClick = (e: React.MouseEvent, newPage: string) => {
        e.preventDefault();
        setPage(newPage);
    }

    return (
        <header className="header">
            <div className="header-logo" data-interactive>YOUR NAME</div>
            <nav className="nav">
                <a 
                    href="#" 
                    className={page === 'home' ? 'active' : ''} 
                    onClick={(e) => handleNavClick(e, 'home')} 
                    data-interactive
                >
                    Home
                </a>
                <a 
                    href="#" 
                    className={page === 'about' ? 'active' : ''} 
                    onClick={(e) => handleNavClick(e, 'about')} 
                    data-interactive
                >
                    About
                </a>
            </nav>
        </header>
    );
}

export default Header;
