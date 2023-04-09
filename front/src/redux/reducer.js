import { 
    ADD_FAVORITE, 
    DELETE_FAVORITE,
    ADD_CHARACTERS,
    CHARACTER_NAVIGATE,
    DELETE_CHARACTER
} from "./types"


const initialState = {
    character: [],
    myFavorite: [],
    page: [],
    error: false
}


export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorite: [...state.myFavorite, action.payload]
            }
        case DELETE_FAVORITE:
            const remove = state.myFavorite.filter(favorite => favorite.id !== action.payload);
            return {
                ...state,
                myFavorite: remove
            }
        case ADD_CHARACTERS:
            const isExiste = state.character.find(finding => finding.id === action.payload.id);
            return !isExiste? {
                ...state,
                character: [...state.character, action.payload],
                error: action.error
            }: {...state}
        case CHARACTER_NAVIGATE:
            return {
                ...state,
                page: [...action.payload],
                error: action.error
            }
        case DELETE_CHARACTER:
            const newArr = state.character.filter(character => character.id !== action.payload);
            return {
                ...state,
                character: newArr
            }
        default: return state;
    }
}