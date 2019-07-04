import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux/chess';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Board from './components/Chess';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 'calc(50% - 70px)',
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
  loading: {
    margin: theme.spacing(1),
    marginLeft: '50%',
  },
}));

function App({ possibleMoves, getPossibleMoves }) {
  const classes = useStyles();

  const { loading } = possibleMoves;

  return (
    <div className="App">
      <Typography className={classes.header} variant="h2">
        Knight Valid Moves
      </Typography>
      <Board />
      {!loading && (
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={getPossibleMoves}
        >
          <SearchIcon className={classes.buttonIcon} />
          Show Moves
        </Button>
      )}
      {loading && <CircularProgress className={classes.loading} />}
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
