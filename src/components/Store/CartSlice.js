import { createSlice } from "@reduxjs/toolkit";  // import createslice from toolkit.

const initialState = []         // creating a variable and assigning the initial value as an empty array[].
const cartSlice = createSlice({   // we need to create a slice to do the actions for updating the state in our UI.
    name: 'cart',               // It will have a name, initial state, and reducers.
    initialState,
    reducers:{                  // In reducers we will have state and actions. 
        add(state, action){     // here add function will take an action from ui and updates the state.
            state.push(action.payload)   // state.push will do an action to update the current state.
        },
        remove(state, action){
          return state.filter(item => item.id !== action.payload)  // this action says remove the item if the items id is not equal to the item passed from Ui.
        }                                                         // we should return the action using return keyword.
        
    }

})

export default cartSlice.reducer  // exporting the reducers using reducer function.
export const {add, remove} = cartSlice.actions  // exporting all the actions using actions.  both will return the actions and the state.