import React from "react";
import "./styles/App.scss";
import { SnackbarProvider } from "notistack";
import BookSearch from "./book-search/BookSearch";

function App() {
  return (
    <div>
      <SnackbarProvider
        maxSnack={3}
        data-id="snack-bar"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <header className="header">
          <div className="header--content">
            <h1>My Good Reads</h1>
          </div>
        </header>
        <main>
          <BookSearch />
        </main>
      </SnackbarProvider>
    </div>
  );
}

export default App;
