import React, { useEffect, useState } from 'react';
import { getNewsIds } from './services/newsAPI';

function App() {
  const [newsIds, setNewsIds] = useState([]);

  useEffect(() => {
    console.log(getNewsIds());
  }, []);

  return <div>{newsIds}</div>;
}

export default App;
