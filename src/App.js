import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/Navbar';
import HeadBody from './components/headerBod/header'
import { Home } from './components/Home/home';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeadBody/>
      <Home greeting={'Bienvenido a Unagi Sushi'}/>    
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
