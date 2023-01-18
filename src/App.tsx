import axios from 'axios';
import React, { useEffect } from 'react';
import apiConfig from './api/api_config';
import tmdbApi, { MovieType, TvType } from './api/tmdbApi';

function App() {
  useEffect(() => {
    (async () => {
      try {
        const movies = await tmdbApi.getMoviesList(MovieType.popular, 3)
        const tv = await tmdbApi.getTvList(TvType.popular, 2)
        console.log(movies)
        console.log(tv)
      }
      catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <div>
      Hello World!
    </div>
  );
}

export default App;
