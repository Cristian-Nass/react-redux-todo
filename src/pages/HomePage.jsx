import { useSelector } from 'react-redux'

const HomePage = () => {
  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <div>Homa Page</div>
      <div>{count}</div>
    </>
  );
};

export default HomePage
