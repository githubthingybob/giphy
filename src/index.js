import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, take } from 'redux-saga/effects';
import axios from 'axios';
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('REFRESH_IMAGES', getGiphyImagesSaga);
    yield takeEvery ('GET_FAVS', getFavoritesSaga);
    yield takeEvery('GET_CATEGORIES', getCategoriesSaga)
    yield takeEvery ('ADD_FAVS', postFavoritesSaga);
    yield takeEvery ('UPDATE_FAVS', updateCategorySaga);
}

function* getGiphyImagesSaga(action) {
    console.log('hit getGiphyImagesSaga with', action);
    let response = yield axios({
        method: "GET",
        url: `/api/giphy/${action.payload}`
    });
    console.log('getImagesSaga in index.js', response.data);
    yield put({
        type: "GET_IMAGES",
        payload: response.data
    });
}

function* getFavoritesSaga(action) {
    console.log('hit getFavoritesSaga with', action);
    let response = yield axios({
        method: "GET",
        url: '/api/favorite'
    });
    console.log('getFavoritesSaga in index.js', response.data);
    yield put({
        type: "REFRESH_IMAGES",
        payload: response.data
    });
}

function* getCategoriesSaga(action) {
    console.log('hit getCategories with', action);
    let response = yield axios({
        method: "GET",
        url: '/api/category'
    });
    console.log('getCategories in index.js', response.data);
    yield put({
        type: "REFRESH_IMAGES",
        payload: response.data
    });
}

function* postFavoritesSaga(action) {
    console.log('hit getCategories with', action);
    let response = yield axios({
        method: "POST",
        url: '/api/favorite',
        data: action.payload
    });
    console.log('postFavoritesSaga in index.js', response.data);
    yield put({
        type: "REFRESH_IMAGES",
        payload: response.data
    });
}

function* updateCategorySaga(action) {
    console.log('hit getCategories with', action);
    let response = yield axios({
        method: "PUT",
        url: '/api/favorite',
        data: action.payload
    });
    console.log('updateCategorySaga in index.js', response.data);
    yield put({
        type: "REFRESH_IMAGES",
        payload: response.data
    });
}


//reducer
const imageList = (state = [], action) => {
    switch (action.type) {
        case 'REFRESH_IMAGES':
            console.log('state, action:', state, action.payload);
            return action.payload
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        imageList
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);


sagaMiddleware.run(rootSaga);
ReactDOM.render(<Provider store ={store}>
    <App/>
    </Provider>, document.getElementById('react-root'));
