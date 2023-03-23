import React from "react";
import "../styles/loginPage.css";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';
import { getToken, getUserData, setUserSession } from '../utils/session';
import Unauthorize from './Unauthorize';
import md5 from 'md5';

export default function RegistrationPage() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [login, setLogin] = useState('')
  const [pwd, setPwd] = useState('')
  const [info, setInfo] = useState({
    show: false,
    msg: ''
  });

  const handleLogin = () => {
    axios.post(`http://localhost:50/registration`, { name: name, surname: surname, login: login, pwd: pwd }).then(response => {
      setInfo({
        show: true,
        msg: 'Udało się zarejestrować'
      })
    }).catch(error => {
      setInfo({
        show: true,
        msg: 'Błąd rejestracji'
      })
    });
  }

  return (
    <div className="app-main">
      <div className="shadow"></div>
      <div className="app-vertical-center container">
        <div className="login-main col-10 col-sm-8 col-md-8 col-lg-4">
          <div className="login-title">
            <h3>Zarejestruj</h3>
          </div>
          <div className="login-content">
            <form className="login-form">
              
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Imię"
                style={{ marginTop: "0px" }}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Nazwisko"
                onChange={(e) => setSurname(e.target.value)}
              />
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Login"
                onChange={(e) => setLogin(e.target.value)}
              />
              <Form.Control
                type="password"
                className="form-control"
                placeholder="Hasło"
                onChange={(e) => setPwd(e.target.value)}
              />
              <Button className="w-100" style={{ marginTop: "20px" }} onClick={handleLogin}>
                Zarejestruj
              </Button>
            </form>
            {info.show && info.msg}
          </div>
          <div style={{color: 'white'}}>
          {name} {surname} {login} {pwd}
          </div>
         
        </div>
      </div>
    </div>
  );
}

