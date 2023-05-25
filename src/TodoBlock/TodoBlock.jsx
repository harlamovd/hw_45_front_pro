import './TodoBlock.css';
import {useDispatch, useSelector} from "react-redux";
import {changeCompletedTodo} from "../store/toolkitSlice";

function TodoBlock ({status}) {
    const todoList = useSelector(state => state.todosData.todoList);
    const dispatch = useDispatch();

    const changeStatusTodo = (e) => {
        dispatch(changeCompletedTodo(e.currentTarget.id));
    }

    const filterTodo = todoList.filter((el) => el.completed === status);
    const todoElements = filterTodo.map(el => (
        <li className='element_todo' key={el.id} id={el.id} onChange={changeStatusTodo}>
            <label className={el.completed ? 'label_todo__completed': 'label_todo'}>
                <input className='input_todo' type='checkbox' key={el.id} defaultChecked={el.completed}  />
                {el.todo}
            </label>
        </li>
    ));
    return (
        <ul className='list_todo'>
            {todoElements}
        </ul>
    );
}
export default TodoBlock