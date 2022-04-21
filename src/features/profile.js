import { createAction, createReducer } from "@reduxjs/toolkit";


//actions
const changeAlias= createAction('change alias');
const changeName= createAction('change name');
const resetProfile = createAction('reset user profile');

const actions = {changeAlias, changeName, resetProfile};
// reducer

const initialState = {
    alias : '',
    name : ''
}
const reducer = createReducer(initialState, {

    [changeAlias]: (state, action)=>(
         {...state, alias: actions.payload}),

    [changeName]: (state, action) => (
        {...state, name: action.payload}),

    [resetProfile]: (state, action) => (
        initialState
    )
    /*
    [changeAll]: (state, action) => ({
        aliass : action.payload.alias,
        name: actions.payload.name
    })
    */
});

export { actions, reducer };