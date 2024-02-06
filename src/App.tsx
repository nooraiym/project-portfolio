import './App.css';
import styled from 'styled-components';
import { Header } from './assets/layout/header/Header';
import { Main } from './assets/layout/sections/main/Main';
import { Skills } from './assets/layout/sections/skills/Skills';
import { Works } from './assets/layout/sections/works/Works';
import { Testimony } from './assets/layout/sections/testimony/Testimony';
import { Contact } from './assets/layout/contacts/Contacts';
import { Slogan } from './assets/layout/slogan/Slogan';
import { Footer } from './assets/layout/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contact />
            <Slogan />
            <Footer />
        </div>
    );
}

export default App;