import React, { useState, useRef } from 'react';
import { useIntl } from '../context/IntlContext';

interface TechCategory {
    title: string;
    skills: string[];
}

interface TechStack {
    proficient: TechCategory;
    exposure: TechCategory;
}

const HomePage = () => {
    const { t, locale } = useIntl();
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const techStackData = t('home.techStack.items') as TechStack | undefined;
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
                            {locale === 'ko' && introDescriptionMore && (
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
                {techStackData?.proficient?.skills && (
                    <div className="tech-category">
                        <h4 className="tech-category-title">{techStackData.proficient.title}</h4>
                        <div className="tech-skills-container">
                            {techStackData.proficient.skills.map((tech) => (
                                <span key={tech} className="tech-skill-tag" data-interactive>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                {techStackData?.exposure?.skills && (
                    <div className="tech-category">
                        <h4 className="tech-category-title">{techStackData.exposure.title}</h4>
                        <div className="tech-skills-container">
                            {techStackData.exposure.skills.map((tech) => (
                                <span key={tech} className="tech-skill-tag" data-interactive>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;