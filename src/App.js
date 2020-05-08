import React, { Component } from 'react';
import Header from './Header'
import SearchForm from './SearchForm';
import ResultList from './ResultList'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      apiBooks: [],
      search: '',
      printType: 'All',
      bookType: 'No Filter'
    };
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  }

  handlePrintType = e => {
    this.setState({
      printType: e.target.value
    });
  }
  
  handleBookFilter = e => {
    this.setState({
      bookType: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('handle submit is working');

    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const options = {
      method: 'GET',
      'Content-Type': 'application/json'
    };
    const API_Key = 'AIzaSyBEnJVaDjQZuLQRutlRWG5AzT94wj-4Uf4';
    let params = 
      this.state.search + 
      '&printType=' + 
      this.state.printType + 
      '&maxResults40' + 
      '&key' + API_Key;
    
    if(this.state.bookType !== 'No Filter') {
      params = params + '&filter=' + this.state.bookType;
    }

    const fetchURL = url + params;
    console.log(fetchURL);

    fetch(fetchURL, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Something went wrong, please try again later.')
      }
      return response;
    })
    .then(response => response.json())
    .then(data => {
        const apiBooks = data['items'];
        this.setState({
          apiBooks,
          error: null
        });
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm 
          onSubmit = {this.handleSubmit}
          onChange = {this.handleChange}
          filterPrint = {this.handlePrintType}
          filterBooks = {this.handleBookFilter}
        />
        <ResultList 
          books = {this.state.apiBooks}
        />
      </div>
    );
  } 
}

App.defaultProps = {
  search: 'books',
  printType: 'All',
  bookType: 'No Filter'
};

export default App;
