import type { RootState } from '@/store';
import { uiActions } from '@/store/ui';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Footer() {
  const dispatch = useDispatch();

  const isDark = useSelector((state: RootState) => state.uiStore.isDarkMode);
  function handleToggleTheme() {
    dispatch(uiActions.toggle());
  }

  function openGithub() {
    window.open('https://github.com/kathirr007/vitesse-react-ts-starter', '_blank');
  }

  useEffect(() => {
    if (isDark)
      document.documentElement.classList.add('dark');
    else
      document.documentElement.classList.remove('dark');
  }, [isDark]);

  return (
    <nav className="text-xl mt-6 inline-flex gap-2">
      <button aria-label="toggle-dark-mode" type="button" className="rounded-md bg-white py-4 px-6 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer" onClick={handleToggleTheme}>
        {isDark ? <Icon icon="carbon:moon" /> : <Icon icon="carbon:sun" />}
      </button>

      <button aria-label="Github" type="button" onClick={openGithub} className="rounded-md bg-white py-4 px-6 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer">
        <Icon icon="carbon:logo-github" />
      </button>
    </nav>
  );
}
