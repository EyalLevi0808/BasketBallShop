import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Merch from "./components/Mrechendise/Merch";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Merch />
      </main>
    </Fragment>
  );
}

export default App;
