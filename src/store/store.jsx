import { createStore, combineReducers } from "redux";

import characters from "./ducks/characters";
import hqs from "./ducks/hqs";
import movies from "./ducks/movies";

const reducers = combineReducers({
  characters,
  hqs,
  movies,
});

const store = createStore(reducers);

export default store;
