import React from 'react';
import './BookData.css';
function BookData(props) {
 
    return ( 
        <div className='book-data'>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className='book' >
                <img src={props.image} alt="book " />
                <h3>{props.title}</h3>
                <h4>{props.author}</h4>
            </div>
            </a>
        </div>
     );
}

export default BookData;