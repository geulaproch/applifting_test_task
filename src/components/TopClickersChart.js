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
    blueRow: {
        backgroundColor: '#2196f3',
        fontWeight: 600,
        height: '80px',
        '& > th, & > td': {
            color: '#ffffff',
            fontSize: '24px',
        },
    },
});

const resultsTable = [
    {
        order: 1,
        team: 'Applifting',
        clicks: 12456,
    },
    {
        order: 2,
        team: 'Filip',
        clicks: 3435,
    },
];

class TopClickersChart extends React.Component {
    constructor(props) {
        super(props);

        this.props.loadTeams(resultsTable);
    }

    render() {
        const {classes} = this.props;

        let rows = this.props.teams.map((team, index) => {
            let teamName = team.team;

            if (teamName.length > 30) {
                teamName = teamName.substring(0, 30) + '...';
            }

            return {
                id: index,
                order: team.order,
                team: teamName,
                clicks: team.clicks,
            }
        });

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
                        {rows.map(row => {
                            let rowStyle = classes.row;
                            if (row.team === this.props.currentTeam) {
                                rowStyle = classes.blueRow;
                            }
                            return (
                                <TableRow className={rowStyle} key={row.id}>
                                    <CustomTableCell component='th' scope='row'>
                                        {row.order}
                                    </CustomTableCell>
                                    <CustomTableCell>{row.team}</CustomTableCell>
                                    <CustomTableCell>{row.clicks}</CustomTableCell>
                                </TableRow>
                            )

                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

TopClickersChart.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        currentTeam: state.player.team,
        teams: state.teams,
    }
};

const mapDispatchToProps = {
    loadTeams: TeamsState.ActionCreators.loadTeams,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TopClickersChart));
