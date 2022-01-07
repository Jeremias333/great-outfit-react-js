import './App.css';
import {NavbarItem, Navbar} from './components/nav';
import {Logo} from './components/utils';
import {CardContainer} from "./components/container";
import {Card, CardImage, CardBody, CardButton} from "./components/card";
import {FaInstagram} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {FiPhone} from "react-icons/fi";

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
      <footer>
        <p><FiPhone/> +55 (81) 98999-6899</p>
        <p><AiOutlineMail/>  jeremiasprogrammer@gmail.com</p>
        <p><FaInstagram/>  @jere.sql</p>
      </footer>
    </div>
  );
}

export default App;
