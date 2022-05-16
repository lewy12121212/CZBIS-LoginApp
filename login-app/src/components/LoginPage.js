import "../styles/loginPage.css";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";

export default function LoginPage() {
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
              />
              <Form.Control
                type="password"
                className="form-control"
                placeholder="Hasło"
              />
              <Button className="w-100" style={{ marginTop: "20px" }}>
                Zaloguj
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

