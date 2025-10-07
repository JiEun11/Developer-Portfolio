import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

const pages: { [key: string]: React.ComponentType } = {
    home: HomePage,
    about: AboutPage,
};

const PageTransition = () => {
    const { page, prevPage, isTransitioning } = useNavigation();
    
    const PageToRender = pages[page];
    const PrevPageToRender = pages[prevPage];

    return (
        <main className="page-container">
            {isTransitioning && PrevPageToRender && (
                <div className="page page-exit" key={prevPage}>
                    <PrevPageToRender />
                </div>
            )}
            {PageToRender && (
                 <div className={`page ${!isTransitioning ? 'page-enter' : ''}`} key={page}>
                    <PageToRender />
                </div>
            )}
        </main>
    );
};

export default PageTransition;
