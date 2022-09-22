import "../styles/homePage.css";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, Button } from "react-bootstrap";
import { getUserData, removeUserSession } from '../utils/session';
import { useEffect, useState } from "react";

export default function HomePage() {
  const [userData, setUserData] = useState('');

  const handleLogout = () => {
    removeUserSession()
    window.location = '/';
  }

  useEffect(() => {
    setUserData(JSON.parse(getUserData()));
  }, [])

  return (
    <div className="app-main">
      <div className="shadow"></div>
      <div className="container">
        <div className="content col-12">
          <Navbar bg="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#" style={{color: 'white'}}>Navbar</Navbar.Brand>
              <Button variant="success" onClick={handleLogout}>Wyloguj</Button>
            </Container>
          </Navbar>
          <div>
            Dane użytkownika: {userData.Name} {userData.Surname}
          </div>
        </div>
      </div>
    </div>
  );
}