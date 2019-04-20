import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {TeamsState} from '../state/TeamsState';
import {connect} from 'react-redux';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontSize: 16,
    },
    body: {
        fontSize: 14,
        fontWeight: 600,
    },
}))(TableCell);

const styles = theme => ({
    table: {
        minWidth: '492px',
        maxWidth: '492px',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

/*const resultsTable = [
    ['Applifting', 1002345],
    ['Filip', 996032],
    ['Mlask', 96843],
    ['Jakub', 82552],
    ['Prokop', 65535],
    ['Zuzka', 60223],
    ['Vráťa', 25005],
    ['Martin', 22152],
    ['Borec', 13123],
    ['CSP', 5],
];*/

/*let rows = [];*/

class TopClickersChart extends React.Component {
    constructor(props) {
        super(props);

        this.props.loadTeams();
    }

    render() {
        const {classes} = this.props;

        let rows = this.state.teams.map((team, index) => {
            return {
                id: index,
                team: team.team,
                clicks: team.clicks,
            }
        });

        /*function createData(player, clicks) {
            id += 1;
            return {id, player, clicks};
        }

        for (let i = 0; i < resultsTable.length; i++) {
            rows.push(createData(resultsTable[i][0], resultsTable[i][1]));
        }*/

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Nr</CustomTableCell>
                            <CustomTableCell>Team</CustomTableCell>
                            <CustomTableCell>Clicks</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell component='th' scope='row'>
                                    {row.id}
                                </CustomTableCell>
                                <CustomTableCell>{row.player}</CustomTableCell>
                                <CustomTableCell>{row.clicks}</CustomTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

/*function TopClickersChart(props) {


    return (

    );
}*/

TopClickersChart.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
    loadTeams: TeamsState.ActionCreators.loadTeams,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(TopClickersChart));
