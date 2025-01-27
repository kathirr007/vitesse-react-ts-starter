import { useLocalStorage } from 'react-use';

function getSystemDefaultMode() {
  if (typeof window !== 'undefined' && window.matchMedia) { // Check if window is defined (client-side)
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDarkMode;
  }
  return false; // Default to light mode if window is undefined (SSR or build time)
}

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', getSystemDefaultMode());

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
  else {
    document.body.classList.remove('dark-mode');
  }

  return [isDarkMode, toggleDarkMode];
}

export { getSystemDefaultMode, useDarkMode };
