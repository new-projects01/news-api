import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NewsContext from './NewsContextCreator';

const GlobalState = (props) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const apiKey = '9d4fe2dedae4438b9cefe0ad6967a9b6';
    const baseUrl = 'https://newsapi.org/v2/';

    const everythingUrl = `${baseUrl}everything?q=bitcoin&apiKey=${apiKey}`;
    axios
      .get(everythingUrl)
      .then((response) => setArticles(response.data.articles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <NewsContext.Provider
      value={{
        articles,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default GlobalState;
