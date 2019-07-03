import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Board } from './components/Chess';
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';

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
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography className={classes.header} variant="h2">
        Knight Valid Moves
      </Typography>
      <Board />
      <Button variant="contained" size="large" color="primary" className={classes.button}>
        <NavigationIcon className={classes.buttonIcon} />
        Search
      </Button>
    </div>
  );
}
