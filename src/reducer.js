export const initialState = {
    basket: [],
}

// global dispatch actions to the global store

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {...state, basket: [...state.basket, action.item]}
            default:
                return state;
        }
    }

export default reducer;
