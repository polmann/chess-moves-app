import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';

const colors = { light: '#FCCDA0', dark: '#D38746' };

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
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Tile({ position, color }) {
  const classes = useStyles();

  return (
    <GridListTile
      className={classes.root}
      position={position}
      style={{ backgroundColor: colors[color] }}
    />
  );
}

Tile.propTypes = {
  position: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['light', 'dark']),
};

export default Tile;
