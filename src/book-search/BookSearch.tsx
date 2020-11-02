import { debounce, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { getBooksByType } from "./book-search.service";
import BookResults from "./BookResults";
import BookWishlist from "./BookWishlist";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  outline: {
    border: "2px solid #EAEAEA",
    margin: "8px",
  },
}));

const BookSearch = () => {
  const classes = useStyles();
  const [bookType, updateBookType] = useState("");
  const [bookTypeToSearch, updateBookTypeToSearch] = useState("");
  const [allAvailableBooks, setAllAvailableBooks] = useState([]);
  const [wishList, setWishList] = useState<any>({});
  const { enqueueSnackbar } = useSnackbar();
  async function requestBooks() {
    if (bookTypeToSearch) {
      const allBooks = await getBooksByType(bookTypeToSearch);
      if (
        allBooks !== undefined &&
        allBooks !== null &&
        allBooks.totalItems > 0
      ) {
        let books: any = [...allBooks?.items];
        setAllAvailableBooks(books);
      } else {
        setAllAvailableBooks([]);
      }
    }
  }

  const addToWishList = (obj: any) => {
    if (wishList[obj.id] === undefined) {
      let local = { ...wishList };
      local[obj.id] = obj;
      setWishList({ ...local });
      enqueueSnackbar("Book added to wishlist successfully!!", {
        variant: "success",
        preventDuplicate: false,
      });
    } else {
      enqueueSnackbar("Book already exists in wishlist !!", {
        variant: "error",
        preventDuplicate: false,
      });
    }
  };

  const deleteBook = (id: any) => {
    let local = { ...wishList };
    delete local[id];
    enqueueSnackbar("Book removed from wishlist successfully!!", {
      variant: "success",
      preventDuplicate: false,
    });
    setWishList({ ...local });
  };

  const delayedQuery = useCallback(
    debounce((bookType: any) => updateBookTypeToSearch(bookType), 500),
    []
  );

  const onSearchChange = (e: any) => {
    updateBookType(e.target.value);
    delayedQuery(e.target.value);
  };
  useEffect(() => {
    async function getAllBooks() {
      await requestBooks();
    }
    getAllBooks();
  }, [bookTypeToSearch]);
  return (
    <>
      <div className="book--container">
        <div className="search-params">
          <Grid container>
            <Grid item xs={8} className={classes.outline}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  className="full-width"
                  autoFocus
                  name="gsearch"
                  type="search"
                  value={bookType}
                  placeholder="Search for books to add to your reading list "
                  onChange={onSearchChange}
                />
              </form>
              {!bookType && (
                <div className="empty">
                  <p>
                    Try searching for a topic, for example
                    <a
                      onClick={() => {
                        updateBookType("Javascript");
                        delayedQuery("Javascript");
                      }}
                    >
                      {" "}
                      "Javascript"
                    </a>
                  </p>
                </div>
              )}
              {bookType && allAvailableBooks.length > 0 && (
                <BookResults
                  books={allAvailableBooks}
                  addToWishList={addToWishList}
                />
              )}
            </Grid>
            <Grid item xs={3} className={classes.outline}>
              <Paper>
                <BookWishlist wishlist={wishList} deleteBook={deleteBook} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default BookSearch;
