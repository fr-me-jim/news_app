import React, { Component } from 'react';

class App extends Component {
  state = { 
    news: []
   }
  
  componentDidMount(){
    this.getNews();
  }

  getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=323c894f6d7443dea2613c06482e22e3`

    const response = await fetch(url);
    const news = await response.json();

    this.setState({
      news: news.articles
    })
  }
  
  render() { 
    return ( <h1>Noticias API React</h1> );
  }
}
 
export default App;

