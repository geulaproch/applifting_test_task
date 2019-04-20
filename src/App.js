import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {Provider} from 'react-redux';

import './App.css';
import AppBar from './components/AppBar';
import MainPage from './pages/MainPage';
import {store} from './State';

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
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <div className='App'>
                        <AppBar title='stfuandclick.com'/>
                        <MainPage/>
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
