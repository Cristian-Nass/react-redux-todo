import {useSelector} from 'react-redux';
import Todo from '../components/Todo';
const TodosList = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-wrapper">
          <Todo title={todo.title} isDone={todo.isDone} date={todo.date} id={todo.id}/>
        </div>
      ))}
    </>
  );
};

export default TodosList;
