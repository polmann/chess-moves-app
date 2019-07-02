import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

function App({ classes }) {
  return (
    <div className="App">
      <Typography className={classes.header} variant="h2">
        Valid Chess Moves
      </Typography>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  header: {
    textAlign: 'center',
  },
};

export default withStyles(styles)(App);
