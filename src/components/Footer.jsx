import '../styles/Footer.css';
import githubIcon from '../assets/links/github/github-mark/github-mark.svg';

export default function Footer() {
  return (
    <footer className="main-footer">
      {/* Links to references page */}
      <a className="references-link">references</a>
      <a
        href="https://github.com/nufc-hub"
        target="blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <img src={githubIcon} alt="GitHub" className="main-footer-img" />
        <p>nufc</p>
      </a>
    </footer>
  );
}
