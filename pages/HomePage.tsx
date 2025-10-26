import React, { useState, useRef } from 'react';
import { useIntl } from '../context/IntlContext';
import { useNavigation } from '../context/NavigationContext';

const HomePage = () => {
    const { t, locale } = useIntl();
    const { setPage } = useNavigation();
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const skills = t('home.techStack.items');
    const proficientSkills = t('home.techStack.proficient.items');
    const exposureSkills = t('home.techStack.exposure.items');

    const introTitle = t('home.title');
    const introDescriptionShort = t('home.description.short');
    const introDescriptionMore = t('home.description.more');

    const contentStyle = {
        maxHeight: isExpanded && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px',
    };

    return (
        <div className="home-grid">
            <div className="grid-item intro">
                <div className="intro-content">
                    <h1 className={`intro-title ${locale}`}>{introTitle}</h1>
                    {introDescriptionShort && (
                        <div className="intro-description-container">
                            <p className="intro-description">{introDescriptionShort}</p>
                            {introDescriptionMore && (
                                <>
                                    <div 
                                        ref={contentRef}
                                        style={contentStyle}
                                        className={`expanded-description ${isExpanded ? 'visible' : ''}`}
                                    >
                                        <p className="intro-description">{introDescriptionMore}</p>
                                    </div>
                                    <button 
                                        onClick={() => setIsExpanded(!isExpanded)} 
                                        className="read-more-btn"
                                        data-interactive
                                    >
                                        {isExpanded ? t('common.showLess') : t('common.readMore')}
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="grid-item tech-stack">
                <h3>{t('home.techStack.title')}</h3>
                {locale === 'ko' ? (
                     <div className="tech-skills-container">
                        {Array.isArray(skills) && skills.map((tech: string) => (
                            <span key={tech} className="tech-skill-tag" data-interactive>
                                {tech}
                            </span>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="tech-stack-group">
                            <h4>{t('home.techStack.proficient.title')}</h4>
                            <div className="tech-skills-container">
                                {Array.isArray(proficientSkills) && proficientSkills.map((tech: string) => (
                                    <span key={tech} className="tech-skill-tag" data-interactive>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                         <div className="tech-stack-group">
                            <h4>{t('home.techStack.exposure.title')}</h4>
                            <div className="tech-skills-container">
                                {Array.isArray(exposureSkills) && exposureSkills.map((tech: string) => (
                                    <span key={tech} className="tech-skill-tag" data-interactive>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default HomePage;