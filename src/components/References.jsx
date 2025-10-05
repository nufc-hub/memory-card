import { referencesData } from '../constants/referencesData';
import githubIcon from '../assets/links/github/github-mark/github-mark.svg';
import '../styles/References.css';
import '../styles/Footer.css';

// Renders asset references
export default function References({ setActivePage }) {
  return (
    <>
      {/* Links to homepage */}
      <header>
        <a
          className="home-link"
          onClick={(e) => {
            e.preventDefault();
            setActivePage('home');
          }}
        >
          Go back to game
        </a>
      </header>
      {/* Asset references */}
      <div className="references">
        {referencesData.map((reference) => (
          <li className="reference" key={reference.id}>
            <a
              href={reference.url}
              title={reference.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {reference.description}
            </a>
          </li>
        ))}
      </div>
      <footer className="references-footer">
        {/* Links to github page */}
        <a
          href="https://github.com/nufc-hub"
          target="blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <img
            src={githubIcon}
            alt="GitHub"
            className="references-footer-img"
          />
          <p>nufc</p>
        </a>
      </footer>
    </>
  );
}
