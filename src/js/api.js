import axios from 'axios';

const API_KEY = '7c47f39dc565b202f275767eff95366e';
const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR_URL = `${BASE_URL}/trending/get-trending`;
const SEARCH_URL = `${BASE_URL}/search/search-movies`;
const INFO_URL = `${BASE_URL}/movie/get-movie-details`;

export default class ApiFetch {
    constructor() {
        this.page = 1;
    }


  // Отримую популярні фільми
    async getPopularData() {
        try {
            const responce = await axios.get(`${POPULAR_URL}?api_key=${API_KEY}&page=${this.page}`);
            console.log(responce);
            return responce.data;
            } catch (error) {
                    console.error('Smth wrong with api get full trends' + error);
        }
        getPopularData()
    }

    
  // Запит по назві фільму
    
    
    async fetchMovieSearcher(text, page) {
        try {
            const { data } = await axios.get(
                `${SEARCH_URL}?api_key=${API_KEY}&query=${text}&page=${page}`,
            );

            return data;
        } catch (error) {
                console.error('Smth wrong with api search fetch' + error);
            }
    }
    

  // Запит на інформацію по фільму
    
    
    async getFilmInfo(id) {
        try {
            const { data } = await axios.get(`${INFO_URL}${id}?api_key=${API_KEY}`);

            return data;
        } catch (error) {
                console.error('Smth wrong with api ID fetch' + error);
            }
    }

    
};
