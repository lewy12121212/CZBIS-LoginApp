import "../styles/loginPage.css";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';
import { getToken, getUserData, setUserSession } from '../utils/session';
import Unauthorize from './Unauthorize';
import md5 from 'md5';

export default function LoginPage() {
  const [login, setLogin] = useState('')
  const [pwd, setPwd] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [userData] = useState(JSON.parse(getUserData()));

  const handleLogin = () => {
    axios.post(`http://localhost:4000/login`, { login: login, pwd: pwd }).then(response => {
      if (response.data.auth) {
        setUserSession(response.data.token, response.data.userData)
        window.location = '/HomePage';
      } else {
        // setUserSession(response.data.token)
        setShowModal(true);
      }
    }).catch(error => {
      console.log(error)
    });
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
    if(checkToken(userData.Login, userData.Password)){
      window.location = '/HomePage';
    }
  }, [userData])

  return (
    <div className="app-main">
      <div className="shadow"></div>
      <div className="app-vertical-center container">
        <div className="login-main col-10 col-sm-8 col-md-8 col-lg-4">
          <div className="login-title">
            <h3>Zaloguj do serwisu</h3>
          </div>
          <div className="login-content">
            <form className="login-form">
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Login"
                style={{ marginTop: "0px" }}
                onChange={(e) => setLogin(e.target.value)}
              />
              <Form.Control
                type="password"
                className="form-control"
                placeholder="Hasło"
                onChange={(e) => setPwd(e.target.value)}
              />
              <Button className="w-100" style={{ marginTop: "20px" }} onClick={handleLogin}>
                Zaloguj
              </Button>
            </form>
          </div>
        </div>
      </div>
      {showModal && <Unauthorize showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

