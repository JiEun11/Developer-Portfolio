import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Locale = 'en' | 'ko' | 'de';

interface IntlContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => any;
}

const IntlContext = createContext<IntlContextType | undefined>(undefined);

export const IntlProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState<Locale>('en');
    const [messages, setMessages] = useState<Record<string, any>>({});

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch(`./locales/${locale}.json`);
                if (!response.ok) {
                    throw new Error(`Could not load ${locale}.json`);
                }
                const data = await response.json();
                setMessages(data);
            } catch (error) {
                console.error("Failed to load locale messages:", error);
                // Fallback to English on error
                if (locale !== 'en') {
                   setLocale('en');
                }
            }
        };

        fetchMessages();
    }, [locale]);

    const t = (key: string) => {
        return messages[key] !== undefined ? messages[key] : key;
    };

    return (
        <IntlContext.Provider value={{ locale, setLocale, t }}>
            {Object.keys(messages).length > 0 ? children : null}
        </IntlContext.Provider>
    );
};

export const useIntl = () => {
    const context = useContext(IntlContext);
    if (context === undefined) {
        throw new Error('useIntl must be used within an IntlProvider');
    }
    return context;
};
