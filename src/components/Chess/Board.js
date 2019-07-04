import React from 'react';
import PropTypes from 'prop-types';
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

function Board({ positionSelected, possibleMoves, selectPosition }) {
  const classes = useStyles();

  const { data } = possibleMoves;

  return (
    <GridList className={classes.board} cols={10} cellHeight="auto">
      {renderHeader()}
      {boardColumns.map((column, i) => [
        <HeaderTile title={`${i + 1}`} />,
        boardColumns.map((column, y) => {
          const position = `${column}${i + 1}`;

          let color = colorSelector(i + 1, y);
          if (data.includes(position)) {
            color = 'highlight';
          } else if (position === positionSelected) {
            color = 'selected';
          }

          return <Tile position={position} color={color} onClick={selectPosition} />;
        }),
        <HeaderTile title={`${i + 1}`} />,
      ])}
      {renderHeader()}
    </GridList>
  );
}

Board.propTypes = {
  positionSelected: PropTypes.string,
  possibleMoves: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.array,
  }),
  selectPosition: PropTypes.func,
};

export default Board;
