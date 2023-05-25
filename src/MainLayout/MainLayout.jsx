import TodoBlock from "../TodoBlock/TodoBlock";
import TodoInput from "../TodoInput/TodoInput";
import './MainLayout.css';

function MainLayout () {
    return (
        <div className='wrapper_todo'>
            <div className='todo_not_completed'>
                <h2 className='todo_title'> В процесі </h2>
                < TodoBlock status={false} />
                <div className='wrapper_input'>
                    < TodoInput />
                </div>
            </div>
            <div className='todo_completed'>
                <h2 className='todo_title'> Завершені </h2>
                < TodoBlock status={true} />
            </div>
        </div>
    )
}
export default MainLayout