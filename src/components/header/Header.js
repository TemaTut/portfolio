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
                    i`m a frontend developer
                </h1>
                <a href="https://tematut.github.io/info/" className="btn">
                    Download CV
                </a>
            </div>
        </header>
    );
};

export default Header;
