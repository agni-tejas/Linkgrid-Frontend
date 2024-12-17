"use client";

import "./App.css";

import { SearchDialogProvider } from "../_components/dashboard/search/SearchDialogContext";
import Main from "../_components/dashboard/page";

function App() {
  return (
    <SearchDialogProvider>
      <Main />
    </SearchDialogProvider>
  );
}

export default App;
