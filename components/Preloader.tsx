import React from 'react';

interface PreloaderProps {
    visible: boolean;
}

const Preloader = ({ visible }: PreloaderProps) => {
  return (
    <div className={`preloader ${!visible ? 'hidden' : ''}`}>
      <div className="preloader-text">PORTFOLIO</div>
    </div>
  );
};

export default Preloader;
