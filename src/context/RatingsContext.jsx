import React, { createContext, useState } from "react";

export const RatingsContext = createContext();

const RatingsContextProvider = ({ children }) => {
  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});

  const addRating = (songId, rating) => {
    setRatings((prev) => ({ ...prev, [songId]: rating }));
  };

  const addComment = (songId, comment) => {
    setComments((prev) => ({
      ...prev,
      [songId]: prev[songId] ? [...prev[songId], comment] : [comment],
    }));
  };

  return (
    <RatingsContext.Provider
      value={{ ratings, addRating, comments, addComment }}
    >
      {children}
    </RatingsContext.Provider>
  );
};

export default RatingsContextProvider;
