import { uiActions } from '@/store/ui';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Footer() {
  // const { isDark, toggleDark } = useDark();
  const dispatch = useDispatch();

  const isDark = useSelector(state => state.uiStore.isDarkMode);
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

      <button type="button" onClick={openGithub} className="icon-btn !outline-none">
        <Icon aria-label="Github" icon="carbon:logo-github" />
      </button>

    </nav>

  );
}
