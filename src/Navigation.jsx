import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const token = useSelector((store) => store.auth.token);
  return (
    <header>
      <p>Token : {token}</p>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/test">Test</NavLink>
        </li>
      </ul>
    </header>
  );
}
