import {all} from "redux-saga/effects";
import {movieSagas} from "./movieSagas";

//Here we are declearing all saga effects , if we have multiple saga effects
export default function* rootSaga () {
    yield all([...movieSagas]); //in side all we can call multiple saga effects
}