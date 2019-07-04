import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';

const colors = {
  light: '#FCCDA0',
  dark: '#D38746',
  highlight: 'rgba(255, 213, 15, 0.7)',
  selected: '#000000',
};

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    width: '10%',
    paddingTop: '10%',
    border: '1px solid',
    '&:hover': {
      opacity: '0.5',
    },
  },
}));

function Tile({ position, color, onClick }) {
  const classes = useStyles();

  return (
    <GridListTile
      className={classes.root}
      style={{ backgroundColor: colors[color] }}
      onClick={() => onClick(position)}
    />
  );
}

Tile.propTypes = {
  position: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['light', 'dark', 'highlight', 'selected']),
  onClick: PropTypes.func,
};

export default Tile;
