import logo from './logo.svg';
import './App.css';
import {NavbarItem, Navbar} from './components/nav';
import {Logo} from './components/utils';
import {CardContainer} from "./components/container";
import {Card, CardImage, CardBody, CardButton} from "./components/card";

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
              <CardImage src="/images/FERNVNDX-clothing-blusao-black.jpg"/>
              <CardBody title="Blusão FERNVNDX" text="Camisa de frio"/>
              <CardButton href="#blusa" title="Comprar" price="75,99"/>
            </Card>
        </CardContainer>
        <CardContainer>
            <Card>
              <CardImage src="/images/FERNVNDX-clothing-blusao-black.jpg"/>
              <CardBody title="Blusão FERNVNDX" text="Camisa de frio"/>
              <CardButton href="#blusa" title="Comprar" price="75,99"/>
            </Card>
        </CardContainer>
        <CardContainer>
            <Card>
              <CardImage src="/images/FERNVNDX-clothing-blusao-black.jpg"/>
              <CardBody title="Blusão FERNVNDX" text="Camisa de frio"/>
              <CardButton href="#blusa" title="Comprar" price="75,99"/>
            </Card>
        </CardContainer>
        <CardContainer>
            <Card>
              <CardImage src="/images/FERNVNDX-clothing-blusao-black.jpg"/>
              <CardBody title="Blusão FERNVNDX" text="Camisa de frio"/>
              <CardButton href="#blusa" title="Comprar" price="75,99"/>
            </Card>
        </CardContainer>
        <CardContainer>
            <Card>
              <CardImage src="/images/FERNVNDX-clothing-blusao-black.jpg"/>
              <CardBody title="Blusão FERNVNDX" text="Camisa de frio"/>
              <CardButton href="#blusa" title="Comprar" price="75,99"/>
            </Card>
        </CardContainer>
        <CardContainer>
            <Card>
              <CardImage src="/images/FERNVNDX-clothing-blusao-black.jpg"/>
              <CardBody title="Blusão FERNVNDX" text="Camisa de frio"/>
              <CardButton href="#blusa" title="Comprar" price="75,99"/>
            </Card>
        </CardContainer>
      </main>
    </div>
  );
}

export default App;
