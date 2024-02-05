import './App.css';
import styled from 'styled-components';
import { Header } from './assets/layout/header/Header';
import { Main } from './assets/layout/sections/main/Main';
import { Skills } from './assets/layout/sections/skills/Skills';
import { Works } from './assets/layout/sections/works/Works';


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Main />
            <Skills />
            <Works />
        </div>
    );
}

export default App;