import React, { useState, useRef, useEffect } from 'react';
import { useIntl } from '../context/IntlContext';
import { LanguageIcon } from './Icons';

const LanguageSelector = () => {
    const { setLocale, t } = useIntl();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'en', name: t('language.selector.en') },
        { code: 'ko', name: t('language.selector.ko') },
        { code: 'de', name: t('language.selector.de') },
    ];

    const handleLanguageChange = (langCode: 'en' | 'ko' | 'de') => {
        setLocale(langCode);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="language-selector" ref={dropdownRef}>
            <button 
                className="language-icon" 
                onClick={() => setIsOpen(!isOpen)} 
                aria-label="Select language" 
                data-interactive
            >
                <LanguageIcon />
            </button>
            <ul className={`language-dropdown ${isOpen ? 'visible' : ''}`}>
                {languages.map(lang => (
                    <li 
                        key={lang.code} 
                        onClick={() => handleLanguageChange(lang.code as 'en' | 'ko' | 'de')}
                        data-interactive
                    >
                        {lang.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageSelector;
