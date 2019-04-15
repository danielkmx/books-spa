import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import booksReducer from './booksReducer';
import selectedBookReducer from './selectedBookReducer';
import favoriteBooksReducer from './favoriteBooksReducer';

export default combineReducers({
    auth: authReducer,
    selectedBook: selectedBookReducer,
    books: booksReducer,
    favoriteBooks: favoriteBooksReducer
});