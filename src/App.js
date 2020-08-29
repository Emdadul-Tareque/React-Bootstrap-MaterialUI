import React, { useState, useEffect } from 'react';
import './App.css';
import News from './components/News/News';

// import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-29&sortBy=publishedAt&apiKey=809a3fa0419f47a6aafa39c60be9a704'
    
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles));
  }, [])

  return (
    <div>
      {
        articles.map(article=> <News article = {article}></News>)
      }
    
    </div>
  );
}

export default App;
