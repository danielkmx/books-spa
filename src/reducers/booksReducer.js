export default (state = [],action) => {
    switch(action.type){
        case "FETCH_BOOKS":
            return action.payload.books
        case "CREATE_BOOK":
            return state;
        default:
            return state;
    }
}