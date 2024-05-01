import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Test() {
  const token = useSelector((store) => store.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [navigate, token]);
  return (
    <>
      <Navigation />
      <main>
        <h1>Page test</h1>
      </main>
    </>
  );
}
