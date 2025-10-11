import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useIntl } from '../context/IntlContext';

const Header = () => {
    const { page, setPage } = useNavigation();
    const { t } = useIntl();

    const handleNavClick = (e: React.MouseEvent, newPage: string) => {
        e.preventDefault();
        setPage(newPage);
    }

    return (
        <header className="header">
            <div className="header-logo" data-interactive>{t('header.name')}</div>
            <nav className="nav">
                <a 
                    href="#" 
                    className={page === 'home' ? 'active' : ''} 
                    onClick={(e) => handleNavClick(e, 'home')} 
                    data-interactive
                >
                    {t('nav.home')}
                </a>
                <a 
                    href="#" 
                    className={page === 'about' ? 'active' : ''} 
                    onClick={(e) => handleNavClick(e, 'about')} 
                    data-interactive
                >
                    {t('nav.about')}
                </a>
            </nav>
        </header>
    );
}

export default Header;