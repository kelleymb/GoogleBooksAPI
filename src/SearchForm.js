import React, { Component } from 'react';
import Filters from './Filters';
import './SearchForm.css';

class SearchForm extends Component {
    render() {
        return (
            <div className='searchForm'>
                <form onSubmit={this.props.onSubmit}>
                    <label htmlFor='search'>Search:</label>
                    <input
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Henry'
                    value={this.props.name}
                    onChange={e => this.props.onChange(e)}
                    />
                    <button type='submit'>Search</button>
                </form>
                <Filters />
            </div>
        );
    }
}

export default SearchForm;