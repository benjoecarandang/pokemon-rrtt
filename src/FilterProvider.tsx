import { createContext, useState, ReactNode } from "react";

interface FilterContextType {
  query: string;
  setQuery: (query: string) => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState(""); 

  return (
    <FilterContext.Provider value={{ query, setQuery }}>
      {children}
    </FilterContext.Provider>
  );
};
