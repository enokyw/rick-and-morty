import { getApi } from "../assets/js/getApi";

import { 
    ADD_FAVORITE, 
    DELETE_FAVORITE,
    ADD_CHARACTERS,
    CHARACTER_NAVIGATE,
    DELETE_CHARACTER
} from "./types";


export const addFavorite = (favorite) => {
    return {
        type: ADD_FAVORITE,
        payload: favorite
    }
}

export const deleteFavorite = (id) => {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}

export const deleteCharacter = (id) => {
    return {
        type: DELETE_CHARACTER,
        payload: id
    }
}

export const addCharacter = (id) => {
    return async (dispatch) => {
        const resp = await getApi(`/${id}`); // llamada a la api rick-and-morty.
        const errorHave = resp.hasOwnProperty("data"); // verifica si no tiene la peticion a la api.

        let data;
        let error = false;
        
        errorHave && resp.data.name? data=resp.data: error=true;
        return dispatch({
            type: ADD_CHARACTERS,
            payload: data,
            error,
        });
    }
}

export const characterNavigate = (page="") => {
    const isDefault = page? "?page="+page : "";
    return async (dispatch) => {
        const resp = await getApi(isDefault);
        const errorHave = resp.hasOwnProperty("data"); // verifica si no tiene la peticion a la api.

        let data = [];
        let error = false;
        errorHave? data=[...resp.data.info.results]: error=true;
        return dispatch({
            type:CHARACTER_NAVIGATE,
            payload: data,
            error
        });
    }
}