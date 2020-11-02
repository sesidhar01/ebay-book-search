import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

interface BookWishlistProps {
  wishlist: any;
  deleteBook: any;
}
const BookWishlist = React.memo(function BookWishlist({
  wishlist,
  deleteBook,
}: BookWishlistProps) {
  return (
    <>
      <Paper variant="elevation" color="primary">
        <Box p={2} className="wishlist">
          My Reading Wishlist ({Object.keys(wishlist).length})
        </Box>
      </Paper>

      {Object.keys(wishlist).length > 0 && (
        <List>
          {Object.keys(wishlist).map((id: any) => {
            return (
              <ListItem key={id}>
                <ListItemAvatar>
                  <Avatar
                    src={wishlist[id]?.volumeInfo?.imageLinks?.thumbnail}
                  ></Avatar>
                </ListItemAvatar>
                <ListItemText primary={wishlist[id]?.volumeInfo?.title} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon
                      name="icon-delete"
                      onClick={() => deleteBook(id)}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
});

export default BookWishlist;
