import React,{useState,useEffect} from 'react';
import axios from 'axios';
import BookData from './BookData';
import './BookStore.css';
import img from './Default_book_cover.webp';

function BookStore() {
    const [userData, setUserData] = useState([]);
    const [inputValue, setInputValue] = useState('Harry ');
    const[searchValue,setSearchValue]=useState('Harry ');

    

    useEffect(() => {
      console.log(searchValue);
      if(searchValue !== ''){
      try{
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`).then((res) => {
      setUserData(res.data);
      console.log(res.data);
    
      });
    }catch(error){
      console.error('Error fetching data:', error);
    }
  }

    }, [searchValue]);
    

    const handleChange=(value)=>{
        setInputValue(value);
    };

    const addInputValue=()=>{
      console.log(inputValue);
     
    setSearchValue(inputValue);
        
    };

    return ( 
    <div>
        <div className='search-books'>
            <input 
               type='text' 
               onChange={(e)=>handleChange(e.target.value)}
               value={inputValue}          
            />
            <button onClick={addInputValue}>Search Book</button>
        </div>
        <hr />
        <div className='book-data'>
        {userData.items && userData.items.slice(0, 9).map((item) =>

              <BookData
                key={item.id}
                image={item.volumeInfo?.imageLinks?.smallThumbnail || img}
                title={item.volumeInfo.title}
                
                author={item.volumeInfo?.authors?.join(', ') }
                link={item.volumeInfo.previewLink}
              />
        )}

        </div>

    </div> );
}

export default BookStore;