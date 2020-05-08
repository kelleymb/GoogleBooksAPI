import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
    render() {
        return (
            <div className='filters'>
                <form>
                    <label htmlFor='print-type'>Print Type:</label>
                    <select id='print-type' name='print-type'>
                        <option value='All'>All</option>
                        <option value='Books'>Books</option>
                        <option value='Magazines'>Magazines</option>
                    </select>
                    <label htmlFor='book-type'>Book Type:</label>
                    <select id='book-type'name='book-type'>
                        <option value='No Filter'>No Filter</option>
                        <option value='ebooks'>E-books</option>
                        <option value='free-ebooks'>Free e-books</option>
                        <option value='paid-ebooks'>Paid e-books</option>
                        <option value='partial'>Partial</option>
                        <option value='full'>Full</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default Filters;