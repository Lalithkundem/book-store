import React from 'react';
import './BookData.css';
function BookData(props) {
    return ( 
        <div className='book-data'>
            <div className='book'>
                <img src={props.image} alt="book " />
                <h3>{props.title}</h3>
                <h4>{props.author}</h4>
            </div>
        </div>
     );
}

export default BookData;