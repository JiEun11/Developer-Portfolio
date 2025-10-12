import React, { useState } from 'react';
import { projectsData } from '../data';
import { useIntl } from '../context/IntlContext';

const ProjectsPage = () => {
    const { t } = useIntl();
    const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

    const handleProjectClick = (projectId: number) => {
        setExpandedProjectId(prevId => (prevId === projectId ? null : projectId));
    };

    return (
        <div className="projects-page">
            <div className="projects-list-container">
                <h2>{t('home.featuredProjects.title')}</h2>

                <ul className="projects-list">
                    {projectsData.map(project => (
                        <li 
                            key={project.id} 
                            className="project-item"
                        >
                            <a 
                                href="#" 
                                data-interactive
                                className={expandedProjectId === project.id ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleProjectClick(project.id);
                                }}
                            >
                                <span>{t(`projects.${project.id}.name`)}</span>
                            </a>
                            <div className={`project-expanded-details ${expandedProjectId === project.id ? 'expanded' : ''}`}>
                                <img 
                                    src={project.imageUrl} 
                                    alt={t(`projects.${project.id}.name`)} 
                                    className="project-expanded-image" 
                                />
                                <div className="project-expanded-text">
                                    <p className="project-description">{t(project.descriptionKey)}</p>
                                    <div className="project-technologies">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="project-tech-tag" data-interactive>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectsPage;