import { Fragment } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Main from "./Main";
import About from "./About";

const Navbar = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default Navbar;
