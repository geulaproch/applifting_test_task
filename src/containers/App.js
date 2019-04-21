import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import * as uuid from 'uuid';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';

import AppBar from '../components/AppBar';
import MainPage from '../pages/MainPage';
import './App.css';
import {PlayerState} from '../state/PlayerState';
import TeamPage from '../pages/TeamPage';

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
    constructor(props) {
        super(props);

        this.props.assignSession(uuid.v4());
    }

    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <div className='App'>
                        <AppBar title='stfuandclick.com'/>
                        <Switch>
                            <Route exact path='/' component={MainPage}/>
                            <Route path='/:teamName' component={TeamPage}/>
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = {
    assignSession: PlayerState.ActionCreators.assignSession,
};

export default connect(null, mapDispatchToProps)(App);
