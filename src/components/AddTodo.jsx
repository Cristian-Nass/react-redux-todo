import {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../state/todo/todoSlice';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {
  const dispatch = useDispatch();
  const todoRef = useRef();

  
  const addToDoHandler = () => {
    const data = {
      title: todoRef.current.value,
      date: new Date().toString(),
      isDone: false,
      id: uuidv4()
    };
    if (data.title) {
      console.log(data);
      todoRef.current.value = null
      dispatch(addTodo(data));
    }
  };

  return (
    <>
      <input type="text" ref={todoRef} />
      <button onClick={addToDoHandler}>Add</button>
    </>
  );
};

export default AddTodo;
