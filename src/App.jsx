import { useDispatch } from 'react-redux';
import './App.css';
import Navigation from './Navigation';
import { setToken } from './redux/slice/auth.slice';

function App() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setToken('saucisse'));
  };
  return (
    <>
      <Navigation />
      <main>
        <h1>Page accueil</h1>
        <button onClick={handleClick}>Clique sur moi !!!</button>
      </main>
    </>
  );
}

export default App;
