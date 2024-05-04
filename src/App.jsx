import React from "react";
import ProdusctList from "./components/ProdusctList";
import Search from "./components/Search";
import StoreProvider from "./context/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <Search></Search>
      <ProdusctList></ProdusctList>
    </StoreProvider>
  );
}

export default App;
