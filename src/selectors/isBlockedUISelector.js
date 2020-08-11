import { createSelector } from 'reselect'
export const isBlockedUISelector = createSelector(
    state=>state.get("isBlockedUI"),
    isBlockedUI=>isBlockedUI
)