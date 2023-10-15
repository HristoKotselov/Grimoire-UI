import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavigationBar from "./navbar";
import Content from "./Content"
import {Grid} from "@mui/material";

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    const [theme, setTheme] = React.useState("dark");
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <NavigationBar/>
            <Content/>
            {/*<div className="App">*/}
            {/*  <header className="App-header">*/}
            {/*    <img src={logo} className="App-logo" alt="logo" />*/}
            {/*    <Counter />*/}
            {/*    <p>*/}
            {/*      Edit <code>src/App.tsx</code> and save to reload.*/}
            {/*    </p>*/}
            {/*    <span>*/}
            {/*  <span>Learn </span>*/}
            {/*  <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">*/}
            {/*    React*/}
            {/*  </a>*/}
            {/*  <span>, </span>*/}
            {/*  <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">*/}
            {/*    Redux*/}
            {/*  </a>*/}
            {/*  <span>, </span>*/}
            {/*  <a className="App-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">*/}
            {/*    Redux Toolkit*/}
            {/*  </a>*/}
            {/*  ,<span> and </span>*/}
            {/*  <a className="App-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">*/}
            {/*    React Redux*/}
            {/*  </a>*/}
            {/*</span>*/}
            {/*  </header>*/}
            {/*</div>*/}

        </ThemeProvider>
    );
}

export default App;
