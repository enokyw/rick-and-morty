import axios from "axios";

export const getApi = async (pageOrId="") => {
    const api_key = "71ea1765094b.c6952541959232af702a";
    const Api = "https://be-a-rym.up.railway.app/api/";
    try {
        const resp = await axios.get(`${Api}character${pageOrId}?key=${api_key}`);
        return resp;
    } catch (error) {
        return error;
    }
}

//https://be-a-rym.up.railway.app/api/character?key=71ea1765094b.c6952541959232af702a