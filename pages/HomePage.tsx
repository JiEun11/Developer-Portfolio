import React from 'react';
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
    const { t } = useIntl();
    const techStackData = t('home.techStack.items') as TechStack | undefined;

    return (
        <div className="home-grid">
            <div className="grid-item intro">
                <h1>{t('home.title')}</h1>
            </div>
            <div className="grid-item tech-stack">
                <h3>{t('home.techStack.title')}</h3>
                {techStackData?.proficient?.skills && (
                    <div className="tech-skills-container">
                        {/* FIX: Wrapped 'tech' in parentheses to make the arrow function signature more explicit and prevent potential parsing errors. */}
                        {techStackData.proficient.skills.map((tech) => (
                            <span key={tech} className="tech-skill-tag" data-interactive>
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;