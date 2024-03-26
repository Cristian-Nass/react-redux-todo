import {useSelector} from 'react-redux';

const TodosList = () => {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos)
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </>
  );
};

export default TodosList;
