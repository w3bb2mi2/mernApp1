
import './App.scss';
import { AuthPage } from './components/authPage/AuthPage';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AuthPage/>
    </div>
  );
}

export default App;
