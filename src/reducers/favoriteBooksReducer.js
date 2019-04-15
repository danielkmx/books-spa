export default (state = [],action) => {
    switch(action.type){
        case "FETCH_FAVORITE_BOOKS":
            return action.payload
        case "ADD_FAVORITE_BOOK":
            return state;
        case "DELETE_FAVORITE_BOOK":
            return state;
        default:
            return state;
    }
}