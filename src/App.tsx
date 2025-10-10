import { Outlet } from 'react-router-dom';
import Navbar from './components/navBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;