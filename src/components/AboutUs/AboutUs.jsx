import "./AboutUs.css";
import { Outlet, Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us">
      <ul className="links">
        <li>
          <Link to="site-history">Minha História</Link>
        </li>
        <li>
          <Link to="site-mission">Missão do Site</Link>
        </li>
      </ul>
      <p>Encontre mais informações sobre nosso site aqui.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;
