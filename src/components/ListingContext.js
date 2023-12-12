import React, { createContext, useState } from 'react';
import { listings } from '../data'

const ListingContext = createContext();

const ListingProvider = ({ children }) => {
  const [allCards, setAllCards] = useState(listings);
  const [savedCards, setSavedCards] = useState([]);

  const contextValue = {
    allCards,
    setAllCards,
    savedCards,
    setSavedCards,
  };

  return (
    <ListingContext.Provider value={contextValue}>
      {children}
    </ListingContext.Provider>
  );
};

export { ListingContext, ListingProvider };
