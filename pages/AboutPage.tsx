import React from 'react';
import { useIntl } from '../context/IntlContext';

const AboutPage = () => {
    const { t } = useIntl();
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
            </div>
        </div>
    );
};

export default AboutPage;
