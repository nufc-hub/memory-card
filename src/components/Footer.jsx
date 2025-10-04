import '../styles/Footer.css';

export default function Footer({ setActivePage, resetGame }) {
  return (
    <footer>
      {/* Links to references page */}
      <button
        onClick={() => {
          setActivePage('references');
          resetGame();
        }}
        className="references-button"
      >
        References
      </button>
    </footer>
  );
}
