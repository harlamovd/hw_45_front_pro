import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList: [
        {
            id: 111111,
            completed: true,
            todo: 'Запустити додаток "Задачі" ',
        },
        {
            id: 222222,
            completed: false,
            todo: 'Натисніть на мене',
        },
        {
            id: 333333,
            completed: false,
            todo: 'Спробуйте створити "задачу"',
        },
    ]
}

const todosDataSlice = createSlice({
    name: 'todosData',
    initialState,
    reducers: {
        changeCompletedTodo (state, action) {
            state.todoList.forEach(el=> el.id === +action.payload
                ? el.completed = !el.completed
                : el)
        },
        addNewTodo (state, action) {
            state.todoList.push(action.payload);
        },
    }
})

export const {changeCompletedTodo, addNewTodo} = todosDataSlice.actions
export default todosDataSlice.reducer