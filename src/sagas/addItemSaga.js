import {take, takeLatest, put, all, call, apply} from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';
import {ADD_ITEM, setItemDetails} from "../actions";
import {blockUI, unBlockUI} from "../actions/blockUI";
import {ADD_ITEM_SUCCESS, addItemFailure, addItemSuccess} from "../actions/addItem";
import {push} from 'connected-react-router';

function* handleAddItem({item}) {
    yield put(blockUI());
    try {
        const response = yield call(fetch, `http://localhost:8081/items`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        const data = yield apply(response, response.json);
        const addedItem = data.item;
        console.log(addedItem);
        //TODO: pass item and then add it to item details.
        yield put(addItemSuccess(addedItem));
    } catch (e) {
        console.error(e);
        yield put(addItemFailure());

    } finally {
        yield put(unBlockUI());
    }

}

function* handleAddItemSuccess({item}) {
    console.log("success", item);
    //TODO: use connected-routes-redux
    yield put(setItemDetails(item));
    yield put(push('/items'));
}


export function* addItemSaga() {
    yield takeLatest(ADD_ITEM, handleAddItem);
}

export function* addItemSuccessSaga() {
    yield takeLatest(ADD_ITEM_SUCCESS, handleAddItemSuccess);
}