import { defineStore } from "pinia";

export const useFilmStore = defineStore({
  id: "film",
  state: () => ({
    chosenFilms: [],
  }),
  actions: {
    addFilmToStore(film) {
      this.chosenFilms.push(film);
    },
    removeFilmFromStore(film) {
      const tagIndex = this.chosenFilms.findIndex((obj) => obj.id === film.id);
      this.chosenFilms.splice(tagIndex, 1);
    },
  },
  getters: {
    getChosenFilmsLength: (state) => state.chosenFilms.length,
    getFilmById: (state) => (id) => {
      const foundFilm = state.chosenFilms.find((film) => {
        if (film.id === id) {
          return film;
        }
        return "Nenalezeno!";
      });
      return foundFilm;
    },
  },
});
