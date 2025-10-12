import React from 'react';
import { useIntl } from '../context/IntlContext';

const AboutPage = () => {
    const { t, locale } = useIntl();
    return (
        <div className="about-page">
            <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Profile" 
                className="profile-picture"
            />
            <div className="about-text">
                <h2>{t('about.title')}</h2>
                <p>
                    {t('about.paragraph')}
                </p>
                 <ul>
                    <li>
                        {locale === 'ko' ? (
                            <a 
                                href="/resume_ko.pdf" 
                                download="jieun-kim-resume.pdf" 
                                className="resume-button"
                                data-interactive
                            >
                                {t('about.resumeButton')}
                            </a>
                        ) : (
                            <a 
                                href="https://docs.google.com/document/d/1d5D54mNhmE-CERrk0aYwtmRocT7x5K_6rK0FXUe60_A/edit?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="resume-button"
                                data-interactive
                            >
                                {t('about.resumeButton')}
                            </a>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;