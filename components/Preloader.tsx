import React from 'react';
import { useIntl } from '../context/IntlContext';

interface PreloaderProps {
    visible: boolean;
}

const Preloader = ({ visible }: PreloaderProps) => {
  const { t } = useIntl();
  return (
    <div className={`preloader ${!visible ? 'hidden' : ''}`}>
      <div className="preloader-text">{t('preloader.text')}</div>
    </div>
  );
};

export default Preloader;