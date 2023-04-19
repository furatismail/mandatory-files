import axios from 'axios'
export default {
    getFilms() {
        return axios.get('https://5ed74760152c310016d84d62.mockapi.io/api/films')
    }
}