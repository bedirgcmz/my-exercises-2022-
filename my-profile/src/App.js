// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h4>asjbsjbc</h4>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import "./styles.css";

const Links = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </>
);

const Home = (props) => <h1>Home</h1>;

const About = (props) => <h1>About</h1>;

export default function App() {
  return (
    <BrowserRouter>
      <Links />
      <Route
        render={({ location }) => {
          return (
            <PageTransition preset="moveToLeftFromRight" transitionKey={location.pathname}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </PageTransition>
          );
        }}
      />
    </BrowserRouter>
  );
}
