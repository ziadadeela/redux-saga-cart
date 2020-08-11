import {makeActionCreator} from '../utility';

export const ADD_ITEM = "ADD_ITEM";
export const addItem = makeActionCreator(ADD_ITEM, "item");

export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const addItemSuccess = makeActionCreator(ADD_ITEM_SUCCESS, "item");


export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";
export const addItemFailure = makeActionCreator(ADD_ITEM_FAILURE);
