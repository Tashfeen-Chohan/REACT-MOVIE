// context [warehouse]
// provider [delivery boy]
// consumer [useContext()]

import React, { useContext, useEffect, useState } from "react";

let key = "bc50892c";
export const api_url = `https://www.omdbapi.com/?&apikey=${key}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [input, setInput] = useState("titanic");
  const [isError, setIsError] = useState({
    show: "false",
    msg: "",
  });

  const getMovie = async (url) => {
    setIsLoading(true)
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
        setIsError({
          show : 'false',
          msg : ''
        })
      } else {
        setIsError({
          show: "true",
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // The debounce() function forces a function to wait a certain amount of time before running again. This functin is built to limit the number of times a function is called.

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovie(`${api_url}&s=${input}`);
    }, 500);

    return () => clearTimeout(timerOut);
  }, [input]);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie, input, setInput }}>
      {children}
    </AppContext.Provider>
  );
};

// global custom hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
