import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Nav from "./components/Nav";

const routeComponents = routes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Nav />
        <Switch>{routeComponents}</Switch>
      </Router>
    </Suspense>
  );
};
export default App;
