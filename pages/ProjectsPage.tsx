import React, { useState } from 'react';
import { projectsData, Project } from '../data';
import { useIntl } from '../context/IntlContext';

const ProjectsPage = () => {
    const { t } = useIntl();
    const [activeProject, setActiveProject] = useState<Project | null>(
        projectsData.length > 0 ? projectsData[0] : null
    );

    const handleMouseEnter = (project: Project) => {
        setActiveProject(project);
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
                            onMouseEnter={() => handleMouseEnter(project)}
                        >
                            <a 
                                href="#" 
                                data-interactive
                                className={activeProject?.id === project.id ? 'active' : ''}
                                onClick={(e) => e.preventDefault()}
                            >
                                <img 
                                    src={project.imageUrl} 
                                    alt={t(`projects.${project.id}.name`)} 
                                    className="project-item-image" 
                                />
                                <span>{t(`projects.${project.id}.name`)}</span>
                            </a>
                            <div className="project-item-details-mobile">
                                <p className="project-description">{t(project.descriptionKey)}</p>
                                <div className="project-technologies">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="project-tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="projects-details-container">
                <div 
                    className={`project-image-preview ${activeProject ? 'visible' : ''}`}
                    style={{ backgroundImage: `url(${activeProject?.imageUrl})` }}
                ></div>
                {activeProject && (
                    <div className="project-details" key={activeProject.id}>
                        {/* FIX: Corrected a typo in the template literal to properly access the `id` property of the `activeProject` object. */}
                        <h3 className="project-title">{t(`projects.${activeProject.id}.name`)}</h3>
                        <p className="project-description">
                            {t(activeProject.descriptionKey)}
                        </p>
                        <div className="project-technologies">
                            {activeProject.technologies.map(tech => (
                                <span key={tech} className="project-tech-tag" data-interactive>{tech}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;
