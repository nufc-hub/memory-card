import '../styles/Footer.css';
import githubIcon from '../assets/links/github/github-mark/github-mark.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        GIFs powered by {/* Link to giphy page */}
        <a
          href="https://giphy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="giphy-link"
        >
          Giphy
        </a>
      </p>
      {/* Link to github page */}
      <a
        href="https://github.com/nufc-hub"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <img src={githubIcon} alt="GitHub" className="footer-img" />
        <p>nufc</p>
      </a>
    </footer>
  );
}
