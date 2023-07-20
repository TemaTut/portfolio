import "./style.css";

const BtnGitHub = ({ link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            LINK TO PROJECT
        </a>
    );
};

export default BtnGitHub;
