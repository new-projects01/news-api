import React, { useEffect, useState } from 'react';
import { getNewsIds } from '../services/NewsAPI';

function NewsContainer() {
  const [newsIds, setNewsIds] = useState([]);

  useEffect(() => {
    // replacing empty array with newsIds
    getNewsIds()
      .then(data => setNewsIds(data))
      .catch(err => console.log(err));
  }, []);

  return <div>{JSON.stringify(newsIds)}</div>;
}

export default NewsContainer;
