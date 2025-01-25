import type { RootState } from '@/store';
import { uiActions } from '@/store/ui';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Footer() {
  // const { isDark, toggleDark } = useDark();
  const dispatch = useDispatch();

  const isDark = useSelector((state: RootState) => state.uiStore.isDarkMode);
  function handleToggleTheme() {
    dispatch(uiActions.toggle());
  }

  function openGithub() {
    window.open('https://github.com/crcravi66/vite-react-starter', '_blank');
  }

  useEffect(() => {
    if (isDark)
      document.documentElement.classList.add('dark');
    else
      document.documentElement.classList.remove('dark');
  }, [isDark]);

  return (
    <nav className="text-xl mt-6 inline-flex gap-2">
      <button aria-label="toggle-dark-mode" type="button" className="icon-btn !outline-none" onClick={handleToggleTheme}>
        {isDark ? <Icon icon="carbon:moon" /> : <Icon icon="carbon:sun" />}
      </button>

      <button aria-label="Github" type="button" onClick={openGithub} className="icon-btn !outline-none border-gray-600">
        <Icon icon="carbon:logo-github" />
      </button>

    </nav>

  );
}
