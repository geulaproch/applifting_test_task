import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontSize: 16,
    },
    body: {
        fontSize: 14,
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

let id = 0;

function createData(player, clicks) {
    id += 1;
    return {id, player, clicks};
}

const resultsTable = [
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
];

let rows = [];

function TopClickersChart(props) {
    const {classes} = props;

    for (let i = 0; i < resultsTable.length; i++) {
        rows.push(createData(resultsTable[i][0], resultsTable[i][1]));
    }

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
    );
}

TopClickersChart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopClickersChart);
