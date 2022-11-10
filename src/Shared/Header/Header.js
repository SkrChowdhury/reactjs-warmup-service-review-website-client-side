import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignout = () => {
    logOut()
      .then(() => {})

      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Button className="fw-bolder text-warning fs-2" variant="">
              <span className="text-dark">F</span>IT
              <span className="text-dark">B</span>AZZ
            </Button>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end ">
            <Link to="/">
              <Button className="fw-bolder" variant="">
                Home
              </Button>
            </Link>
            <Link to="/blog">
              <Button className="fw-bolder" variant="">
                Blog
              </Button>
            </Link>

            {user?.email && (
              <Link to="/orders">
                <Button className="fw-bolder" variant="">
                  My Reviews
                </Button>
              </Link>
            )}

            {user?.email && (
              <Link to="/addService">
                <Button className="fw-bolder" variant="">
                  Add Service
                </Button>
              </Link>
            )}

            {/* {user?.email && <Nav.Link  to="/manageAllOrders">Manage All Orders</Nav.Link>} */}

            {/* {!user?.email && < Link to='/login'><Button variant="outline-success">login</Button></Link>}
                        {user?.email && <span>{user?.displayName}</span>} */}
            {user?.email && <span>Welcome,{user.email}</span>}
            <Link to="/login">
              <Button className="fw-bolder" variant="">
                Login
              </Button>
            </Link>

            {user?.email ? (
              <Button onClick={handleSignout} className="fw-bolder" variant="">
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button className="btn btn-small fw-bolder">Login</Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
