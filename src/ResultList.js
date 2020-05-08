import React, { Component } from 'react';
import SearchResults from './SearchResults';

class ResultList extends Component {
    render() {
        
        const books =
            this.props.books !== undefined
            ? this.props.books.map((book, i) => <SearchResults key={i} book={book}/>)
            : 'No search results found';
        
        return (
            <ul>
                <li>{books}</li>
            </ul>
        );
    }
}

export default ResultList;