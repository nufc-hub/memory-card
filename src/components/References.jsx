import { referencesData } from '../constants/referencesData';
import '../styles/References.css';

// Renders asset references
export default function References({ setActivePage }) {
  return (
    <div className="references-page">
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
      <div>
        {/* Links to homepage */}
        <button className="home-button" onClick={() => setActivePage('home')}>
          Home
        </button>
      </div>
    </div>
  );
}
