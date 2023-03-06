import apiConfig from "./api_config";
import axiosClient from "./axios_client";

export interface MovieObject {
    page: number;
    results: (Movie & {original_title: string})[];
    total_pages: number;
    total_results: number;
}

export interface TVObject {
    page: number;
    results: Tv[];
    total_pages: number;
    total_results: number;
}

export interface Movie {
    key: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};
export interface Tv {
    key: string;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: string;
    id: number;
    name: string;
    origin_country: string;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: string;
    poster_path: string;
    vote_average: string;
    vote_count: string;
};

export enum MovieType {
    upcoming = 'upcoming',
    popular = 'popular',
    top_rated = 'top_rated',
}

export enum TvType {
    popular = 'popular',
    top_rated = 'top_rated',
}

export enum Category {
    movie = 'movie',
    tv = 'tv'
}

const tmdbApi = {
    getMoviesList: (type: MovieType, page: number) => {
        return axiosClient.get<MovieObject>(`3/movie/${type}?api_key=${apiConfig.api_Key}&page=${page}`)
    },
    getTvList: (type: TvType, page: number) => {
        return axiosClient.get<TVObject>(`3/tv/${type}?api_key=${apiConfig.api_Key}&page=${page}`)
    },
    getVideos: (category: Category, id: number) => {
        return axiosClient.get(`3/${category}/${id}/videos?api_key=${apiConfig.api_Key}`)
    },
    search: (category: Category, page: number) => {
        return axiosClient.get(`3/search/${category}?api_key=${apiConfig.api_Key}&page=${page}`)
    },
    detail: (category: Category, id: number) => {
        return axiosClient.get(`3/${category}/${id}/?api_key=${apiConfig.api_Key}`)
    },
    similar: (category: Category, id: number, page: number) => {
        return axiosClient.get(`3/${category}/${id}?api_key=${apiConfig.api_Key}&page=${page}`)
    },
}

export default tmdbApi;