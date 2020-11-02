import {
  Avatar,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
  paper: {
    padding: "8px",
  },
  grid: {
    marginLeft: "8px",
  },
  button: {
    marginTop: "8px",
  },
}));

interface BookResultsProps {
  books: any;
  addToWishList: any;
}

const BookResults = ({ books, addToWishList }: BookResultsProps) => {
  const classes = useStyles();

  const addToWishListProps = (obj: any) => {
    addToWishList(obj);
  };
  return (
    <List>
      {books?.map((book: any) => {
        return (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <>
                  <Avatar
                    style={{ height: "150px", width: "150px" }}
                    variant="square"
                    alt="Cindy Baker"
                    src={book?.volumeInfo?.imageLinks?.thumbnail}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    name="btn-wishlist"
                    className={classes.button}
                    onClick={() => addToWishListProps(book)}
                  >
                    Add to Wishlist
                  </Button>
                </>
              </ListItemAvatar>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="baseline"
                className={classes.grid}
              >
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    className={classes.inline}
                  >
                    {"Title - "}
                  </Typography>
                  {book?.volumeInfo?.title}
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    className={classes.inline}
                  >
                    {"Authors - "}
                  </Typography>
                  {book?.volumeInfo?.authors?.join(", ")}
                </Grid>
                <Grid item xs={12}>
                  {book?.volumeInfo?.publisher && (
                    <>
                      <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {"Publisher - "}
                      </Typography>
                      {book?.volumeInfo?.publisher}
                    </>
                  )}
                </Grid>
                <Grid item xs={12}>
                  {book?.volumeInfo?.publisher && (
                    <>
                      <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {"Published On - "}
                      </Typography>
                      {book?.volumeInfo?.publishedDate}
                    </>
                  )}
                </Grid>
                <Grid item xs={12}>
                  {book?.volumeInfo?.description && (
                    <Paper
                      className={classes.paper}
                      color="textPrimary"
                      variant="outlined"
                    >
                      {book?.volumeInfo?.description}
                    </Paper>
                  )}
                </Grid>
              </Grid>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
};

export default BookResults;
