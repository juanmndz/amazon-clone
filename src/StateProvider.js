import React, {createContext, useContext, useReducer} from 'react'

// Prepares teh data layer
export const StateContext = createContext();
// wrap our app and provide the Data layer
export const StateProvider = ({reducer,initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
//  pull information from the layer
export const useStateValue = () => useContext(StateContext);