import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import HeaderTile from './HeaderTile';
import Tile from './Tile';

const boardColumns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const useStyles = makeStyles(theme => ({
  board: {
    maxWidth: '800px',
    margin: '0 auto !important',
  },
}));

function renderHeader(location) {
  return [
    <HeaderTile key="left_empty" />,
    boardColumns.map(column => <HeaderTile title={column} />),
    <HeaderTile key="right_empty" />,
  ];
}

function renderRow(number) {
  let colorSelector = i => (i % 2 ? 'light' : 'dark');
  if (number % 2) {
    colorSelector = i => (i % 2 ? 'dark' : 'light');
  }

  return [
    <HeaderTile title={`${number}`} />,
    boardColumns.map((column, i) => (
      <Tile position={`${column}${number}`} color={colorSelector(i)} />
    )),
    <HeaderTile title={`${number}`} />,
  ];
}

export default function Board() {
  const classes = useStyles();

  return (
    <GridList className={classes.board} cols={10} cellHeight="auto">
      {renderHeader('top')}
      {boardColumns.map((column, i) => renderRow(i + 1))}
      {renderHeader('top')}
    </GridList>
  );
}
