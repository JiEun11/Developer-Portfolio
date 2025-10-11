import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import LanguageSelector from './LanguageSelector';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://github.com/JiEun11" target="_blank" rel="noopener noreferrer" aria-label="Github" data-interactive><GithubIcon /></a>
                <a href="https://www.linkedin.com/in/jieun-kim-aa8185210/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-interactive><LinkedinIcon /></a>
                <a href="mailto:bella.jin.jieun.kim@gmail.com" aria-label="Email" data-interactive><MailIcon /></a>
                <LanguageSelector />
            </div>
        </footer>
    );
};

export default Footer;