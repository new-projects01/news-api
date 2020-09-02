import axios from 'axios';

export const apiKey = '9d4fe2dedae4438b9cefe0ad6967a9b6';
export const baseUrl = 'https://newsapi.org/v2/';
export const everythingUrl = `${baseUrl}everything?q=bitcoin&apiKey=${apiKey}`;
export const topHeadlinesUrl = `${baseUrl}top-headlines?country=us&apiKey=${apiKey}`;

// creating side effect (blocking the rendering of the UI)
export const getNewsIds = async () => {
  const result = await axios.get(everythingUrl).then(data => data);

  return result;
};
