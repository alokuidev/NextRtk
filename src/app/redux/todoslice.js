const { createSlice, nanoid, current } = require("@reduxjs/toolkit")

const initialState = {
    todos:[]
}

const Slice = createSlice({
    name:'todoList',
    initialState:initialState,
    reducers:{
        addTodos: (state, action) =>{
            
            const data = {
                id:nanoid(),
                name: action.payload
            }
            state.todos.push(data);
            //console.log(JSON.stringify(current(state.todos)))
        }
    }
})

export const {addTodos} = Slice.actions;
export default Slice.reducer