import {takeLatest, select, put, call} from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

import {
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    setItemQuantityFetchStatus,
    decreaseItemQuantity,
    FETCHED, FETCHING
} from './../actions'
import {currentUserSelector} from "../selectors";

export function* handleIncrease({id: itemId}) {
    yield put(setItemQuantityFetchStatus(FETCHING));
    const user = yield select(currentUserSelector);
    const resp = yield call(fetch, `http://localhost:8081/cart/add/${user.get('id')}/${itemId}`);
    if (resp.status !== 200) {
        yield put(decreaseItemQuantity(itemId, true));
        alert('ops!');
    }

    yield put(setItemQuantityFetchStatus(FETCHED));
}

export function* handleDecrease({id: itemId, local}) {
    if (local) {
        return;
    }
    yield put(setItemQuantityFetchStatus(FETCHING));
    const user = yield select(currentUserSelector);
    const resp = yield call(fetch, `http://localhost:8081/cart/remove/${user.get('id')}/${itemId}`);
    if (resp.status !== 200) {
        yield put(decreaseItemQuantity(itemId, true));
        alert('ops!');
    }

    yield put(setItemQuantityFetchStatus(FETCHED));
}

export function* itemQuantitySaga() {

    yield[
        takeLatest(INCREASE_ITEM_QUANTITY, handleIncrease),
        takeLatest(DECREASE_ITEM_QUANTITY, handleDecrease)
    ];
}