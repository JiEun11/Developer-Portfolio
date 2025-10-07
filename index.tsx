import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// --- SVG Icons --- //
const GithubIcon = () => (
  <svg viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
);

// --- Data --- //
const projectsData = [
    { id: 1, name: "E-commerce Platform", imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=800" },
    { id: 2, name: "Data Visualization Dashboard", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" },
    { id: 3, name: "Mobile Fitness App", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800" }
];
const techStackData = ["TypeScript", "React", "Node.js", "GraphQL", "Figma"];

// --- Components --- //
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        const target = e.target as HTMLElement;
        if (target.closest('a, button')) {
          cursorRef.current.classList.add('hover');
        } else {
          cursorRef.current.classList.remove('hover');
        }
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

const Preloader = ({ visible }: { visible: boolean }) => {
  return (
    <div className={`preloader ${!visible ? 'hidden' : ''}`}>
      <div className="preloader-text">PORTFOLIO</div>
    </div>
  );
};

const Header = ({ page, setPage }: { page: string, setPage: (page: string) => void }) => {
    return (
        <header className="header">
            <div className="header-logo" data-interactive>YOUR NAME</div>
            <nav className="nav">
                <a href="#" className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')} data-interactive>Home</a>
                <a href="#" className={page === 'about' ? 'active' : ''} onClick={() => setPage('about')} data-interactive>About</a>
            </nav>
        </header>
    );
}

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

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="#" aria-label="Github" data-interactive><GithubIcon /></a>
                <a href="#" aria-label="LinkedIn" data-interactive><LinkedinIcon /></a>
                <a href="mailto:example@email.com" aria-label="Email" data-interactive><MailIcon /></a>
            </div>
        </footer>
    );
};


// --- Main App Component --- //
const App = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState('home');
  const [prevPage, setPrevPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = 'hidden';
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleSetPage = (newPage: string) => {
    if (newPage !== page && !isTransitioning) {
        setPrevPage(page);
        setIsTransitioning(true);
        setTimeout(() => {
            setPage(newPage);
            setIsTransitioning(false);
        }, 500); // match CSS animation duration
    }
  };
  
  const PageToRender = page === 'home' ? HomePage : AboutPage;
  const PrevPageToRender = prevPage === 'home' ? HomePage : AboutPage;

  return (
    <>
      <CustomCursor />
      <Preloader visible={loading} />
      {!loading && (
        <div className="app-container">
          <Header page={page} setPage={handleSetPage} />
          <main className="page-container">
            {isTransitioning && <div className="page page-exit"><PrevPageToRender /></div>}
            <div className={`page ${!isTransitioning ? 'page-enter' : ''}`}><PageToRender /></div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
