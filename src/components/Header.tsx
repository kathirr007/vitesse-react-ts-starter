import { NavLink } from 'react-router';

export function Header() {
  return (
    <header className="items-center justify-between mb-6">
      {/* <h1 className="text-2xl font-bold">Vite + React</h1> */}
      <nav className="inline-flex gap-2">
        <NavLink
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
        >
          Contact
        </NavLink>
        <a href="https://github.com/crcravi66/vite-react-starter">Github</a>

      </nav>
    </header>
  );
}
