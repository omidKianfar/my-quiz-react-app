import { Fragment } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import Main from "../Main/Main";
import About from "../About/About";

const NavbarMenu = () => {
  const NavLinkClass = [`text-dark text-decoration-none`];
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar className="shadow">
          <Container>
            <Nav className="fs-5">
              <Nav.Link>
                <NavLink to="/" className={`${NavLinkClass}`}>
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/about" className={`${NavLinkClass}`}>
                  About
                </NavLink>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default NavbarMenu;
