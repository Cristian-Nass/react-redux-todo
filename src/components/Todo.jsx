import {useDispatch} from 'react-redux';
import {checkIt} from '../state/todo/todoSlice'

// eslint-disable-next-line react/prop-types
const Todo = ({title, isDone, date, id}) => {
  const dispatch = useDispatch();

  const checkHandler = (id) => {
    dispatch(checkIt(id))
  }
   return (
    <>
      <div style={{fontWeight: 'bold', color:'white'}}>{title}</div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <input onChange={() => checkHandler(id)} style={{width:'20px'}} type="checkbox" />
      <div>Done it: {isDone ? <>yes</> : <>no</>}</div>
      <div>Date: {date}</div>
      </div>
    </>
  );
};

export default Todo;
