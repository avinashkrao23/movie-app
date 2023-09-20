import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movieList: [],
        movie: {}
    },
    reducers: {
        getMovies(name) {
            return name;
        },
        setMovies(state, action) {
            state.movieList = action.payload;
        },
        getMovie(id) {
            return id;
        },
        setMovie(state, action) {
            state.movie = action.payload;
        }
    }
});

export const {getMovies, setMovies, getMovie, setMovie} = movieSlice.actions;

export default movieSlice.reducer;