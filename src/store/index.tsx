import { legacy_createStore as createStore } from 'redux';
import { pointsReducer } from './pointsReducer';

export const store = createStore(pointsReducer);
