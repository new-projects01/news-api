import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

function NewsContextProvider(props) {
  const [data, setData] = useState();
  const apiKey = '9d4fe2dedae4438b9cefe0ad6967a9b6';
  const baseUrl = 'https://newsapi.org/v2/';
  // const topHeadlinesUrl = `${baseUrl}top-headlines?country=us&apiKey=${apiKey}`;

  useEffect(() => {
    const everythingUrl = `${baseUrl}everything?q=bitcoin&apiKey=${apiKey}`;
    axios
      .get(everythingUrl)
      .then(response => setData(response.data))
      .catch(err => console.log(err));
  }, [data]);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
}

export default NewsContextProvider;
