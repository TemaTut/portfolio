import Header from "./../components/header/Header";

const Home = () => {
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>
                                JavaScript, TypeScript, ReactJS, Axios, Redux, HTML, CSS (SCSS, flex, grid), Figma, NPM, GIT,
                                Visual Studio Code, Webpack, Jest (basics), Node.js (basics)
                            </p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Home;
