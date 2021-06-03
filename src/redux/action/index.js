import * as types from './constant';

export const increment = (val) => ({
    type: types.INCREMENT,
    val
})

export const decrement = (val) => ({
    type: types.DECREMENT,
    val
})

export const checkingNumber = (number) => ({
    type: types.CHECK_NUMBER,
    number,
})