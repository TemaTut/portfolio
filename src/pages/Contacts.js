const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Languages</h2>
                        <p>English (B1), Russia (Native)</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p>
                            <a href="https://t.me/tematuta"> https://t.me/tematuta </a> / +7 (927) 604-02-72
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p>
                            <a href="#!">0009494@mail.ru</a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Contacts;
