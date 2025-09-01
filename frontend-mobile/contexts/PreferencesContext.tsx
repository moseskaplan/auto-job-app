import React, { createContext, useState, useContext, ReactNode } from 'react';

type Preferences = {
  desiredTitles: string;
  locations: string;
  minSalary: string;
  mismatchThreshold: number;
  autoApply: boolean;
  dailyEmail: boolean;
  selectedResume: number | null;
};

const defaultPreferences: Preferences = {
  desiredTitles: '',
  locations: '',
  minSalary: '',
  mismatchThreshold: 0.7,
  autoApply: false,
  dailyEmail: false,
  selectedResume: null,
};

type PreferencesContextType = {
  preferences: Preferences;
  setPreferences: (prefs: Preferences) => void;
};

const PreferencesContext = createContext<PreferencesContextType>({
  preferences: defaultPreferences,
  setPreferences: () => {},
});

export const PreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);
  return (
    <PreferencesContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => useContext(PreferencesContext);
