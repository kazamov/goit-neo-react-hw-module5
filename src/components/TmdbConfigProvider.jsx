import { createContext, useContext } from 'react';

const TmdbContext = createContext({});

const TmdbConfigProvider = ({ children, config }) => {
  return <TmdbContext.Provider value={config}>{children}</TmdbContext.Provider>;
};

export const useTmdbConfig = () => {
  return useContext(TmdbContext);
};

export function useTmdbImg(imagePath, cutomSize) {
  const config = useTmdbConfig();

  const baseUrl = config.images.secure_base_url;
  const size = config.images.poster_sizes[3];

  return `${baseUrl}${cutomSize ?? size}${imagePath}`;
}

export default TmdbConfigProvider;
