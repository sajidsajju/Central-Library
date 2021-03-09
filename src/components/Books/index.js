import React, { memo, useEffect, useState } from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const theme = createMuiTheme({
  typography: {
    fontFamily: '-apple-system',
  },
  palette: {
    primary: { main: '#363f4f' },
    secondary: {
      main: '#fe4a49',
    },
    title: {
      fontFamily: 'Poppins',
      fontSize: 12,
      marginBottom: 12,
      fontWeight: 'bold',
    },
    author: {
      fontFamily: 'Poppins',
      fontSize: 3,
      marginBottom: 5,
    },
    status: {
      fontFamily: 'Poppins',
      fontSize: 2,
      marginBottom: 2,
      fontWeight: 'bold',
    },
    Books: {
      position: 'relative',
    },
    addIcon: {
      position: 'fixed',
      zIndex: '4',
    },
  },
});

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    height: 200,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#e3e3e3',
    },
  },
}));

export const Books = memo(() => {
  const classes = useStyles();

  let history = useHistory();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('/books')
        .then(res => {
          if (res.data.success) {
            setBooks(res.data.message);
          }
        })
        .catch(err => console.log(err));
    };
    fetchData();
  }, [books]);

  function deleteBook(id) {
    axios
      .delete('/book/' + id)
      .then(res => {
        if (res.data.success) {
          console.log(res.data.message);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          justify="space-around"
          spacing={3}
          className={classes.Books}
          style={{ marginTop: '50pt' }}
        >
          {books.map((book, key) => (
            <Grid item key={book._id}>
              <Card className={classes.card}>
                <CardHeader
                  aria-label="recipe"
                  title={book.title}
                  className={classes.title}
                  onClick={() => history.push(`/Edit_Book/${book._id}`)}
                ></CardHeader>
                <CardContent>
                  <Typography
                    style={{ color: '#696969' }}
                    variant="h6"
                    component="p"
                    className={classes.author}
                  >
                    {book.author}
                  </Typography>
                  <IconButton
                    style={{ float: 'right' }}
                    onClick={() => {
                      deleteBook(book._id);
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                  <br />
                  <Typography className={classes.status}>
                    Status : {book.status}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ThemeProvider>
    </>
  );
});
export default Books;
