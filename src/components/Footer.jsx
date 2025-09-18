import '../styles/Footer.css';

export default function Footer({ setActivePage }) {
  return (
    <div className="footer">
      {/* Links to references page */}
      <button
        onClick={() => setActivePage('references')}
        className="references-button"
      >
        References
      </button>
    </div>
  );
}
