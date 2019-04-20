import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

import './App.css';
import AppBar from './components/AppBar';
import GameContainer from './components/GameContainer';

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
                    <AppBar title='stfuandclick.com'/>
                    <GameContainer/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
