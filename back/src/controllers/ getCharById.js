import axios from 'axios'

export const getCharById = (res, ID) => {
    axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
    .then(resp => {
        console.log(resp.data)
    }).catch(error => {
        throw error;
    })
}
getCharById("",24);