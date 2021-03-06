import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import CategoryForm from './components/CategoryForm';

class App extends Component {
  state = { 
    news: []
   }
  
  componentDidMount(){
    this.handleGetNews();
  }

  handleGetNews = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=323c894f6d7443dea2613c06482e22e3`

    const response = await fetch(url);
    const news = await response.json();

    this.setState({
      news: news.articles
    })
  }
  
  render() { 
    return ( 
      <Fragment>
        <Header
          title='News with React API'
        />

        <div className="container white news-container">
          <CategoryForm 
            handleGetNews={this.handleGetNews}
          />

          <NewsList 
            news={this.state.news}
          />    

        </div>
      </Fragment>
    );
  }
}
 
export default App;

