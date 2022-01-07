import logo from './logo.svg';
import './App.css';
import {NavbarItem, Navbar} from './components/nav';
import {Logo} from './components/utils';
import {CardContainer} from "./components/container";
import {Card} from "./components/card";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Logo src="/logo512.png"></Logo>
        <NavbarItem href="#home" title="Home"/>
        <NavbarItem href="#outfit-males" title="Outfit Masculino"/>
        <NavbarItem href="#outfit-famales" title="Outfit Femenino"/>
        <NavbarItem href="#about" title="Sobre"/>
      </Navbar>
      <main>
        <CardContainer>
            <Card>
              <p>Olá</p>
              <p>Olá</p>
            </Card>
        </CardContainer>
        <CardContainer>
            <Card>
              <p>Olá</p>
              <p>Olá</p>
            </Card>
        </CardContainer>
        <CardContainer>
            <Card>
              <p>Olá</p>
              <p>Olá</p>
            </Card>
        </CardContainer>
        <CardContainer>
            <Card>
              <p>Olá</p>
              <p>Olá</p>
            </Card>
        </CardContainer>
      </main>
    </div>
  );
}

export default App;
