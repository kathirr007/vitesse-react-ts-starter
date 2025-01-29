import { NavLink } from 'react-router';

export function Header() {
  return (
    <header className="items-center justify-between mb-6">
      {/* <h1 className="text-2xl font-bold">Vite + React</h1> */}
      <nav className="inline-flex gap-2 my-8">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'text-gray-900 dark:text-gray-200' : 'text-blue-400 hover:text-gray-900 dark:hover:text-gray-200'}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'text-gray-900 dark:text-gray-200' : 'text-blue-400 hover:text-gray-900 dark:hover:text-gray-200'}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? 'text-gray-900 dark:text-gray-200' : 'text-blue-400 hover:text-gray-900 dark:hover:text-gray-200'}
        >
          Contact
        </NavLink>
        <NavLink
          to="/test"
          className={({ isActive }) => isActive ? 'text-gray-900 dark:text-gray-200' : 'text-blue-400 hover:text-gray-900 dark:hover:text-gray-200'}
        >
          Test
        </NavLink>
        <a className="text-blue-400 hover:text-gray-900 dark:hover:text-gray-200" href="https://github.com/crcravi66/vite-react-starter">Github</a>

      </nav>
    </header>
  );
}
