import { makeActionCreator } from '../utility';
export const BLOCK_UI = "BLOCK_UI";
export const UNBLOCK_UI = "UNBLOCK_UI";
export const blockUI = makeActionCreator(BLOCK_UI);
export const unBlockUI = makeActionCreator(UNBLOCK_UI);
