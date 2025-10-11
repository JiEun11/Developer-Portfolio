import React from 'react';
import { useIntl } from '../context/IntlContext';

const HomePage = () => {
    const { t } = useIntl();
    const techStackData = t('home.techStack.items') as string[];

    return (
        <div className="home-grid">
            <div className="grid-item intro">
                <h1>{t('home.title')}</h1>
            </div>
            <div className="grid-item tech-stack">
                <h3>{t('home.techStack.title')}</h3>
                <ul>
                    {techStackData.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default HomePage;