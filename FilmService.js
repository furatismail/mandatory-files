import { HttpClient } from "./HttpClient"

export default {
    getFilms() {
        return HttpClient.get('/api/films')
    }
}