import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  header: {
    alignSelf: 'center',
    textAlign: 'center',
    width: '10%',
  },
}));

function HeaderTile({ title }) {
  const classes = useStyles();

  return (
    <GridListTile className={classes.header}>
      <Typography variant="h6">{title}</Typography>
    </GridListTile>
  );
}

HeaderTile.propTypes = {
  title: PropTypes.string,
};

export default HeaderTile;
