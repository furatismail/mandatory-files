import FilmService from '../services/FilmService';
import FilmsService from '../services/FilmService'
export function useFilm() {

  const addFilm = async () => {
    try {
        const res = await FilmsService.addFilm({
          film: "Test",
        });
  
       return res;
      } catch (error) {
        console.log(error);
      }
  } 
  
  const getFilms = async () => {
      try {
         const {data} = await FilmService.getFilms();
         const films = data;
         return films; 
      } catch (error) {
        console.log(error)
      }
  }

  return {
      addFilm,
      getFilms
  }
}
