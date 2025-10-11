import React, { useState } from 'react';
import { projectsData } from '../data';
import { useIntl } from '../context/IntlContext';

const HomePage = () => {
    const [activeImage, setActiveImage] = useState<string | null>(null);
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
            <div className="grid-item projects">
                <h3>{t('home.featuredProjects.title')}</h3>
                <ul>
                    {projectsData.map(project => (
                        <li key={project.id} className="project-item" 
                            onMouseEnter={() => setActiveImage(project.imageUrl)}
                            onMouseLeave={() => setActiveImage(null)}>
                            <a href="#" data-interactive>{t(`projects.${project.id}.name`)}</a>
                        </li>
                    ))}
                </ul>
                <div 
                    className={`project-image-preview ${activeImage ? 'visible' : ''}`}
                    style={{ backgroundImage: `url(${activeImage})` }}
                ></div>
            </div>
        </div>
    );
};

export default HomePage;