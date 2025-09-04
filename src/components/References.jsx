import { referencesData } from '../constants/referencesData';

// Renders asset references
export default function References() {
  return (
    <div className="references">
      {referencesData.map((reference) => (
        <li key={reference.id}>
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
  );
}
