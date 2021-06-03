import axios from 'axios';
import * as type from '../actions/constant';

const initialState = {
    book: [],
    loading: false
}
const getBookById = async(id) => {
    const url = `http://localhost:8000/books/`+id;
      const response = await axios.get(url);
      const bookdata = await response.status === 200 ?response.data:[];
      return bookdata;
}
export const LibraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.GETBOOKDETAIL:
            let bookData = getBookById(action.id);
            return{
                ...state,
                book: bookData
            }
    
        default:
            return state;
    }
}