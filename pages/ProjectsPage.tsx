import React, { useState } from 'react';
import { companyExperiencesData, enDeExperiencesData, SimpleExperience } from '../data';
import { useIntl } from '../context/IntlContext';

const ProjectsPage = () => {
    const { t, locale } = useIntl();
    const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

    const handleProjectClick = (projectId: number) => {
        setExpandedProjectId(prevId => (prevId === projectId ? null : projectId));
    };

    return (
        <div className="projects-page">
            <div className="projects-list-container">
                <h2>{t('experience.title')}</h2>

                {locale === 'ko' ? (
                    companyExperiencesData.map(companyExp => (
                        <div key={companyExp.id} className="company-group">
                             <h3 className="company-header">{t(companyExp.companyKey)}</h3>
                            <ul className="projects-list">
                                {companyExp.projects.map(project => (
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
                                            <span>{t(project.titleKey)}</span>
                                        </a>
                                        <div className={`project-expanded-details ${expandedProjectId === project.id ? 'expanded' : ''}`}>
                                            <div className="project-expanded-text">
                                                <div className="experience-header">
                                                    <h4>{t(project.roleKey)}</h4>
                                                    <p>{t(project.periodKey)}</p>
                                                </div>
                                                <ul className="experience-description">
                                                    {project.descriptionPointsKeys.map(pointKey => (
                                                        <li key={pointKey}>{t(pointKey)}</li>
                                                    ))}
                                                </ul>
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
                    ))
                ) : (
                    <ul className="projects-list">
                        {enDeExperiencesData.map((exp: SimpleExperience) => (
                             <li 
                                key={exp.id} 
                                className="project-item"
                            >
                                <a 
                                    href="#" 
                                    data-interactive
                                    className={expandedProjectId === exp.id ? 'active' : ''}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleProjectClick(exp.id);
                                    }}
                                >
                                    <span>{t(exp.companyKey)}</span>
                                </a>
                                <div className={`project-expanded-details ${expandedProjectId === exp.id ? 'expanded' : ''}`}>
                                    <div className="project-expanded-text">
                                        <div className="experience-header">
                                            <h4>{t(exp.roleKey)}</h4>
                                            {exp.subtitleKey && <p className="experience-subtitle">{t(exp.subtitleKey)}</p>}
                                            <p>{t(exp.periodKey)}</p>
                                        </div>
                                        <ul className="experience-description">
                                            {exp.descriptionPointsKeys.map(pointKey => (
                                                <li key={pointKey}>{t(pointKey)}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;