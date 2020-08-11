import {createReducer} from './../utility';
import {BLOCK_UI, UNBLOCK_UI} from '../actions'

const defaultState = false;

export const isBlockedUI = createReducer(defaultState, {
    [BLOCK_UI](state, {value}) {
        return true;
    },
    [UNBLOCK_UI](state, {value}) {
        return false;
    }
});