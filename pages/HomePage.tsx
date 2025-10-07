import React, { useState } from 'react';
import { projectsData, techStackData } from '../data';

const HomePage = () => {
    const [activeImage, setActiveImage] = useState<string | null>(null);

    return (
        <div className="home-grid">
            <div className="grid-item intro">
                <h1>Creative Developer focused on building aesthetic & functional web experiences.</h1>
            </div>
            <div className="grid-item tech-stack">
                <h3>TECH STACK</h3>
                <ul>
                    {techStackData.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
            </div>
            <div className="grid-item projects">
                <h3>FEATURED PROJECTS</h3>
                <ul>
                    {projectsData.map(project => (
                        <li key={project.id} className="project-item" 
                            onMouseEnter={() => setActiveImage(project.imageUrl)}
                            onMouseLeave={() => setActiveImage(null)}>
                            <a href="#" data-interactive>{project.name}</a>
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
