import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  fab: {
    position: 'fixed',
    zIndex: '4',
    bottom: '10px',
    right: '10px',
    color: '#36454f',
  },
});

export const AddIcon = memo(() => {
  const classes = useStyles();

  let history = useHistory();

  const addBook = () => {
    history.push('/add_book');
  };
  return (
    <IconButton className={classes.fab} onClick={addBook}>
      <AddCircleIcon fontSize="large" />
    </IconButton>
  );
});
