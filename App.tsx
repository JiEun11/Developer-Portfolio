import React, { useState, useEffect } from 'react';
import { NavigationProvider } from './context/NavigationContext';
import { IntlProvider } from './context/IntlContext';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <IntlProvider>
        <NavigationProvider>
        <CustomCursor />
        <Preloader visible={loading} />
        {!loading && (
            <div className="app-container">
            <Header />
            <PageTransition />
            <Footer />
            </div>
        )}
        </NavigationProvider>
    </IntlProvider>
  );
};

export default App;