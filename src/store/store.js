// Actions

const ACTION = (INPUT) => {
    return { 
      type: 'STATE/ACTION', 
      payload: INPUT 
    };
  }

//Reducers

const STATE = [];
const STATEReducer = (STATE = initialSTATE, action) => {
  switch(action.type) {
    case 'ACTION': 
      return action.payload
    default:
      return allRecipes;
  }
}


// Store
const reducers = {
    STATE: STATEReducer,
}
  
  const rootReducer = combineReducers(reducers)
  const store = createStore(rootReducer)


  // ------------ Redux Toolkit ----------- //
  
  
const options = {
    name: 'todos',
    initialState: [],
    reducers: {
      addTodo: (state, action) => {
        return [
          ...state,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false
          }
        ]
      },
      toggleTodo: (state, action) => {
        return state.map(todo =>
          (todo.id === action.payload.id) ? { ...todo, completed: !todo.completed } : todo
        )
      }
    }
   }
    
   const todosSlice = createSlice(options);