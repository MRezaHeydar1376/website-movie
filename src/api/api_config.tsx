const apiConfig = {
    baseUrl: "https://api.themoviedb.org/",
    api_Key: "1cc28d7cb8202fa7566afa90c4a8b9f4",
    orginalImage : (imagePath?: string) => `https://image.tmdb.org/t/p/original/${imagePath}`,
    w500Image : (imagePath?: string) => `https://image.tmdb.org/t/p/original/${imagePath}`,
}

export default apiConfig;