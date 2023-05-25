import {useRef} from "react";
import './TodoInput.css';
import {useDispatch} from "react-redux";
import {addNewTodo} from "../store/toolkitSlice";

function TodoInput (){
    const dispatch = useDispatch();
    const valueNew = useRef(null);

    function clickHandlerButton () {
        const newElement = {
            id: Date.now(),
            completed: false,
            todo: valueNew.current.value,
        }
        dispatch(addNewTodo(newElement));
        valueNew.current.value = null;
    }

    return (
        <>
            <p className="input_title"> Створіть нову задачу</p>
            <input
                className="input_string"
                type="text"
                ref={valueNew}
            />
            <button className="input_button" onClick={clickHandlerButton}> Додати </button>
        </>
    )
}
export default TodoInput