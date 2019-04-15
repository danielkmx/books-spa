import booksApi from "../apis/booksApi";

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};
export const selectBook = book => {
  return {
    type: "SELECT_BOOK",
    payload: book
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const fetchBooks = () => async dispatch => {
  const result = await booksApi.get("/books");
  dispatch({ type: "FETCH_BOOKS", payload: result.data });
};
export const fetchFavoriteBooks = () => async dispatch => {
  const result = await booksApi.get("/favoriteBook");
  const results = [];
  result.data.books.forEach(async id  => {
    const book = await booksApi.get("/books/" + id.bookId);
    results.push(book);
  })
  dispatch({ type: "FETCH_FAVORITE_BOOKS", payload: results });
};



export const addFavoriteBook = id => async dispatch => {
  const result = await booksApi.post("/favoriteBook", {
    bookId: id,
  });
  dispatch({ type: "ADD_FAVORITE_BOOK", payload: result.data });
};

export const deleteFavoriteBook = Id => async dispatch => {
  console.log(Id)
  const result = await booksApi.delete("/favoriteBook/" + Id);
  dispatch({ type: "DELETE_FAVORITE_BOOK", payload: result.data });
};