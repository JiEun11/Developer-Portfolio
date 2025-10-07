import React, { createContext, useState, useContext, ReactNode } from 'react';

interface NavigationContextType {
  page: string;
  setPage: (page: string) => void;
  isTransitioning: boolean;
  prevPage: string;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
    const [page, setPageState] = useState('home');
    const [prevPage, setPrevPage] = useState('home');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const setPage = (newPage: string) => {
        if (newPage !== page && !isTransitioning) {
            setPrevPage(page);
            setPageState(newPage);
            setIsTransitioning(true);
            // Match CSS animation duration to end the transition state
            setTimeout(() => {
                setIsTransitioning(false);
            }, 500); 
        }
    };

    return (
        <NavigationContext.Provider value={{ page, setPage, isTransitioning, prevPage }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
};
