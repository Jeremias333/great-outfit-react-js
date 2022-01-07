import logo from './logo.svg';
import './App.css';
import {NavbarItem, Navbar} from './components/nav';
import {Logo} from './components/utils';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        {/* <h1 style="{color: white}">Ola</h1> */}
        {/* <p>Hello world</p> */}
      {/* </header> */}
      <Navbar>
        <Logo src="/logo512.png"></Logo>
        <NavbarItem href="#" title="Home"/>
        <NavbarItem href="#" title="Outfit Masculino"/>
        <NavbarItem href="#" title="Outfit Femenino"/>
        <NavbarItem href="#" title="Sobre"/>
      </Navbar>
      <main>
        <p>Hello world</p>
      </main>
    </div>
  );
}

export default App;
