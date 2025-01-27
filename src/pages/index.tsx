import type { RootState } from '@/store';
import reactLogo from '@/assets/react.svg';

import { counterActions } from '@/store/counter';
import { useDispatch, useSelector } from 'react-redux';
import './indexPage.css';
import viteLogo from '/vite.svg';

function IndexContent() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counterStore.count);
  function handleIncrement() {
    dispatch(counterActions.increment());
  }
  return (
    <div className="home-page text-center">
      <div className="flex gap-4 justify-center">
        <a rel="noreferrer noopener" href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo p-6  h-[144px]" alt="Vite logo" />
        </a>
        <a rel="noreferrer noopener" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="react logo p-6 h-[144px] duration-300" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-medium">Vite + React</h1>
      <div className="card">
        <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer mb-4" onClick={handleIncrement}>
          count is
          {' '}
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/pages/index.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

function Index() {
  return (
    <HomeLayout>
      <IndexContent />
    </HomeLayout>
  );
}

export default Index;
