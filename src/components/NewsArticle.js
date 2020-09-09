import React from 'react';

function NewsArticle({ data }) {
  return (
    <div className="news">
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <img className="image" src={data.urlToImage} alt="article"></img>
      </a>
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <h2 className="title">{data.title}</h2>
      </a>
      <br />
      <br />
      <p className="published">{data.publishedAt}</p>
      <p className="source">Source: {data.source.name} from {data.author}</p>
    </div>
  );
}

export default NewsArticle;
