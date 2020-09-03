import React from 'react';

function NewsArticle({ data }) {
  return (
    <div className="news">
      <a href={data.url} target="_blank"><img className="image" src={data.urlToImage}></img></a>
      <a href={data.url} target="_blank"><h2 className="title">{data.title}</h2></a>
      <p className="author">{data.author}</p>
      <p className="published">{data.publishedAt}</p>
      <p className="source">{data.source.name}</p>
    </div>
  );
}

export default NewsArticle;
