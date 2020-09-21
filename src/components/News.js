import React, { useContext } from 'react';
import NewsContextCreator from '../context/NewsContextCreator';
import NewsArticle from './NewsArticle';

function News(props) {
  const { articles } = useContext(NewsContextCreator);

  return (
    <div className='newsContainer'>
      {articles
        ? articles.map((news) => <NewsArticle data={news} key={news.url} />)
        : 'loading'}
    </div>
  );
}

export default News;
