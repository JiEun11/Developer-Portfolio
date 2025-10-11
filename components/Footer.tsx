import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import LanguageSelector from './LanguageSelector';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="#" aria-label="Github" data-interactive><GithubIcon /></a>
                <a href="#" aria-label="LinkedIn" data-interactive><LinkedinIcon /></a>
                <a href="mailto:example@email.com" aria-label="Email" data-interactive><MailIcon /></a>
                <LanguageSelector />
            </div>
        </footer>
    );
};

export default Footer;