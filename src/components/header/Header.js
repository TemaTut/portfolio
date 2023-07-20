import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Artem</em>
          </strong>
          <br />
          i`m a junior frontend developer
        </h1>
        <a
          href="https://hh.ru/resume/153bd3fcff0b6026140039ed1f64644d6a4c74?hhtmFrom=resume_list"
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
