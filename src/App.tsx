import './App.css';
import styled from 'styled-components';
import { Header } from './assets/layout/header/Header';
import { Main } from './assets/layout/sections/main/Main';
import { Skills } from './assets/layout/sections/skills/Skills';


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Main />
            <Skills />
        </div>
    );
}

export default App;