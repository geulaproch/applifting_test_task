import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

import './App.css';
import MainPage from './pages/MainPage';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2196f3',
        },
        common: {
            white: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Roboto',
        fontSize: 12,
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className='App'>
                    <MainPage/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
