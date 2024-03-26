import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {addTodo} from '../state/todo/todoSlice';

const HomePage = () => {
  const todosList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const data = {
    title: 'Test one',
    date: new Date().toString(),
    isDone: false,
  };

  const addToDo = () => {
    console.log(data);
    dispatch(addTodo(data));
  };

  console.log(todosList);

  return (
    <>
      <div>Homa Page</div>
      <button onClick={addToDo}>Add</button>
    </>
  );
};

export default HomePage;
