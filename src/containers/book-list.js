/**
 * Created by echosteg on 17/01/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map(book => {
            return (
                <li key={book.title} className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-xs-4">
                {this.renderList()}
            </ul>
        );

    }
}

function mapStateToProps(state){
    //whatever is returned from here will show up as props in book list
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);