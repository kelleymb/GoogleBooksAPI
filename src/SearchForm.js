import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    render() {
        return (
            <div className='searchForm'>
                <form>
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
            </div>
        );
    }
}

export default SearchForm;