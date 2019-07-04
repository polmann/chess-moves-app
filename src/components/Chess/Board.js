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

const colorSelector = (x, y) => (x % 2 ? (y % 2 ? 'dark' : 'light') : y % 2 ? 'light' : 'dark');

function renderHeader() {
  return [
    <HeaderTile key="left_empty" />,
    boardColumns.map(column => <HeaderTile title={column} />),
    <HeaderTile key="right_empty" />,
  ];
}

function renderRow(x) {
  return [
    <HeaderTile title={`${x}`} />,
    boardColumns.map((column, y) => (
      <Tile position={`${column}${x}`} color={colorSelector(x, y)} />
    )),
    <HeaderTile title={`${x}`} />,
  ];
}

export default function Board() {
  const classes = useStyles();

  return (
    <GridList className={classes.board} cols={10} cellHeight="auto">
      {renderHeader()}
      {boardColumns.map((column, i) => renderRow(i + 1))}
      {renderHeader()}
    </GridList>
  );
}
