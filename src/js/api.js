import axios from 'axios';

const API_KEY = 'f3b7458c34b3a95455ce5f7edb53b2eb';
const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR_URL = `${BASE_URL}/trending/movie/day`;
const SEARCH_URL = `${BASE_URL}/search/search-movies`;
const INFO_URL = `${BASE_URL}/movie/get-movie-details`;

export default class ApiFetch {
    constructor() {
        this.page = 1;
    }


  // Отримую популярні фільми
    async getPopularData() {
        try {
            const response = await axios.get(`${POPULAR_URL}?api_key=${API_KEY}&page=${this.page}`);
            // const data = await response.data;
            console.log(response.data);
            return response.data;
            } catch (error) {
                    console.error('Smth wrong with api get full trends' + error);
        }
        
    }

    
  // Запит по назві фільму
    
    
    async fetchMovieSearcher(text) {
        try {
            const { data } = await axios.get(
                `${SEARCH_URL}?api_key=${API_KEY}&query=${text}`,
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

const newClass = new ApiFetch();

newClass.getPopularData()

// const urlWork = 'https://api.themoviedb.org/3/trending/all/day?api_key=f3b7458c34b3a95455ce5f7edb53b2eb';

// const urlChek = `${POPULAR_URL}?api_key=${API_KEY}&page=1`;

// getMovi(urlChek)
// function getMovi(url) {
//     fetch(url).then(res => res.json()).then(data => {
//         console.log(data.result);
//     })
// }