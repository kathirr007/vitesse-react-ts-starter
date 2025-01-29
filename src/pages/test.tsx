import { useDispatch, useSelector } from 'react-redux';

export default function TestPage() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counterStore.count);
  function handleIncrement() {
    dispatch(counterActions.increment());
  }

  return (
    <HomeLayout>
      <h1 className="text-2xl font-medium">Test Page</h1>
      <div className="card">
        <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer mb-4" onClick={handleIncrement}>
          count is
          {' '}
          {count}
        </button>
      </div>
    </HomeLayout>
  );
}
