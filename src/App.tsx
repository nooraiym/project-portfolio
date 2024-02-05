import './App.css';
import styled from 'styled-components';
import { Header } from './assets/layout/header/Header';
import { Main } from './assets/layout/sections/main/Main';


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Main />
        </div>
    );
}

export default App;