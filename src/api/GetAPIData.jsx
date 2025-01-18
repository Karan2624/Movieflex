export const getMovieData = async () => {
    try {
        const response = await fetch(
            "http://www.omdbapi.com/?i=tt3896198&apikey=8a082e5c&s=titanic&page=1"
        )
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}