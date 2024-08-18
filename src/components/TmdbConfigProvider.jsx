import { createContext, useContext } from 'react';

const TmdbContext = createContext({});

const TmdbConfigProvider = ({ children, config }) => {
  return <TmdbContext.Provider value={config}>{children}</TmdbContext.Provider>;
};

export const useTmdbConfig = () => {
  return useContext(TmdbContext);
};

export default TmdbConfigProvider;
