import React from 'react';

const AboutPage = () => {
    return (
        <div className="about-page">
            <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Profile" 
                className="profile-picture"
            />
            <div className="about-text">
                <h2>My Philosophy</h2>
                <p>
                    I believe in the power of simplicity and clarity in design and code. My goal is to create digital products that are not only visually appealing but also intuitive and accessible to everyone. I am passionate about continuous learning and always eager to explore new technologies to push the boundaries of what's possible on the web.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
