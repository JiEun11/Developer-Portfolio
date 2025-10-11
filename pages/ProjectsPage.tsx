import React, { useState } from 'react';
import { projectsData } from '../data';
import { useIntl } from '../context/IntlContext';

const ProjectsPage = () => {
    // Initialize with the first project's image to avoid an empty container on load
    const [activeImage, setActiveImage] = useState<string>(projectsData.length > 0 ? projectsData[0].imageUrl : '');
    const { t } = useIntl();

    return (
        <div className="projects-page">
            <div className="projects-list-container">
                <h2>{t('home.featuredProjects.title')}</h2>
                <ul className="projects-list">
                    {projectsData.map(project => (
                        <li 
                            key={project.id} 
                            className="project-item"
                            onMouseEnter={() => setActiveImage(project.imageUrl)}
                        >
                            <a href="#" data-interactive>
                                {/* This image is only visible on mobile via CSS */}
                                <img 
                                    src={project.imageUrl} 
                                    alt={t(`projects.${project.id}.name`)} 
                                    className="project-item-image" 
                                />
                                <span>{t(`projects.${project.id}.name`)}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="projects-image-container">
                {/* This div is for desktop hover preview */}
                <div 
                    className={`project-image-preview ${activeImage ? 'visible' : ''}`}
                    style={{ backgroundImage: `url(${activeImage})` }}
                ></div>
            </div>
        </div>
    );
};

export default ProjectsPage;
