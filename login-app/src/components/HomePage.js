import "../styles/homePage.css";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, Button } from "react-bootstrap";
import { getToken, getUserData, removeUserSession } from '../utils/session';
import { useEffect, useState } from "react";
import md5 from "md5";

export default function HomePage() {
  const [userData] = useState(JSON.parse(getUserData()));

  const handleLogout = () => {
    removeUserSession()
    window.location = '/';
  }

  const checkToken = (login, password) => {
    const token = getToken();
    const tokenMd5 = md5(login + password);
    console.log('md5: ' + tokenMd5);
    console.log(token )
    if(token === tokenMd5) return true;
    return false;
  }

  useEffect(() => {
    if(!checkToken(userData.Login, userData.Password)){
      handleLogout();
    }
  }, [userData])

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