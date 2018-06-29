import { createStore, combineReducers } from 'redux';
import { reducer as carouselReducer } from './components/carousel/index';

const reducers = combineReducers({
    carousel: carouselReducer
});

const store = createStore(reducers, {});

export default store;
