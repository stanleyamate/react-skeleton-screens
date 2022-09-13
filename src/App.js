import React from "react";
import Articles from "./components/Articles";
import User from "./components/User";


function App() {

  
  return (
    <div className="App">
      <header>
        <h2>skeleton</h2>
      </header>
      <main className="wrapper">
        <User />
        <Articles />
      </main>
    </div>
  );
}

export default App;
