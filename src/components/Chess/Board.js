import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Tile from './Tile';

const boardColumns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const useStyles = makeStyles(theme => ({
  board: {
    maxWidth: '800px',
    margin: '0 auto !important',
  },
  header: {
    textAlign: 'center',
  },
  row: {
    alignSelf: 'center',
    textAlign: 'center',
    width: '10%',
  },
}));

function renderHeader(className, location) {
  return [
    <GridListTile key={`${location}_left_empty`} />,
    boardColumns.map(column => (
      <GridListTile key={column}>
        <Typography className={className} variant="h6">
          {column}
        </Typography>
      </GridListTile>
    )),
    <GridListTile key={`${location}_right_empty`} />,
  ];
}

function renderRow(className, number) {
  let colorSelector = i => (i % 2 ? 'light' : 'dark');
  if (number % 2) {
    colorSelector = i => (i % 2 ? 'dark' : 'light');
  }

  return [
    <GridListTile key={`${number}_left_number`} className={className}>
      <Typography variant="h6">{number}</Typography>
    </GridListTile>,
    boardColumns.map((column, i) => {
      const position = `${column}${number}`;
      return <Tile key={position} position={position} color={colorSelector(i)} />;
    }),
    <GridListTile key={`${number}_right_number`} className={className}>
      <Typography variant="h6">{number}</Typography>
    </GridListTile>,
  ];
}

export default function Board() {
  const classes = useStyles();

  return (
    <GridList className={classes.board} cols={10} cellHeight="auto">
      {renderHeader(classes.header, 'top')}
      {boardColumns.map((column, i) => renderRow(classes.row, i + 1))}
      {renderHeader(classes.header, 'top')}
    </GridList>
  );
}
