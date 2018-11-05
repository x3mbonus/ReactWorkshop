const initialState = {
    todos: ['Milk', 'Nuts']
};

export const TodoReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.payload]};
            break;
    
        default:
            return state;
    }

}