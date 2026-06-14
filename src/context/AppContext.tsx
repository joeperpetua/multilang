import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { Language } from "../types";

interface AppContextType {
  languages: Language[];
  setLanguages: React.Dispatch<React.SetStateAction<Language[]>>;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("languagesArray");
    if (stored) {
      try {
        setLanguages(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("languagesArray", JSON.stringify(languages));
  }, [languages]);

  return (
    <AppContext.Provider
      value={{
        languages,
        setLanguages,
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useAppContext needs to be used in a component wrapped by AppProvider",
    );
  }
  return context;
};
