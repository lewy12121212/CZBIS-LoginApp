import "./page404.css";
import "./global.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Page404() {
  return (
    <div className="app-main">
      <div className="shadow"></div>
      <div className="app-vertical-center container">
        <div className="main col-10 col-sm-8 col-md-8 col-lg-4">
          <h1>404 - Not Found :(</h1>
          <h4>Przykro nam - wygląda na to, że zabłądziłeś</h4>
        </div>
      </div>
    </div>
  );
}