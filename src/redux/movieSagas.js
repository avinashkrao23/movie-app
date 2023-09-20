import {takeLatest,put, fork, call} from "redux-saga/effects";
import { fetchMovie, fetchMovies } from "./api";
import { setMovies, getMovies, getMovie, setMovie } from "./feature/movieSlice";

// creating generated function
function* onLoadMoviesAsync ({payload}) {  //payload will take from components
    console.log('payload===222',payload);
    try {
        const movieName = payload; //here payload contain movie name
        const response = yield call(fetchMovies, movieName); // here we are using call redux saga for api call and pass movieName as a argument to fetchMovies and fetch movie
                                                            // call is wait for the promise to finish.The argument should be function that return a promise
        if (response.status === 200) {
            yield put(setMovies({...response.data})); // put allow to dispatch new action from our redux saga middleware
        }
    } catch (error) {
        console.log(error);
    }
}
// we need watcher here so creating generator function 
function* onLoadMovies() {
    // takeLatest allows only one onLoadMovies task to run at any moment.
    //And it will the latest started task.
    //If a previous task is still running when another onLoadMovies task is started, 
    //the previous task is automatically cancelled
    console.log('getMovie.type==11111',getMovie.type);
    yield takeLatest (getMovies.type, onLoadMoviesAsync); // we need to apecify the action type and second argument is listner that is also generator function

}

function* onLoadMovieAsync ({payload}) {
    console.log('payload====',payload);
    try {
        const movieId = payload;
        const response = yield call(fetchMovie, movieId);
        if (response.status === 200) {
            yield put(setMovie({...response.data}));
        }
    } catch (error) {
        console.log(error);
    }
}

function* onLoadMovie() {
    console.log('getMovie.type==',getMovie.type);
    console.log('getMovie.type==',onLoadMovieAsync);
    yield takeLatest (getMovie.type, onLoadMovieAsync); // we need to apecify the action type and second argument is listner that is also generator function
}

export const movieSagas = [fork(onLoadMovies), fork(onLoadMovie)] //fork is simply used to call a method, you passed a method and method is invoked