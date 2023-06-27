import { useContext, useEffect } from 'react';
import './App.css';
import Bolgs from './components/Bolgs';
import { Header } from './components/Header';
import { Pagination } from './components/Pagination';
import { AppContext } from './context/AppContext';

function App() {

  const { fetchBolgPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBolgPosts();
  }, []);

  return (
    <div className="w-75 mx-auto container-fluid">
      <Header />
      <Bolgs />
      <Pagination />
    </div>
  );
}

export default App;
