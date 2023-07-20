import "./style.css";

import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/TemaTut">
                <img src={ gitHub } alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p> 2022 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
