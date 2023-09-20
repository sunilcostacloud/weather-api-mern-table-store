import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { weatherReducer } from "./weatherApi/reducers/weatherReducer";


const reducer = combineReducers({
    getCityWeatherDetails: weatherReducer
});

const middlware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlware))
);

export default store;