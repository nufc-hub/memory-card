import '../styles/Footer.css';

export default function Footer({ setActivePage, resetGame }) {
  return (
    <footer>
      {/* Links to references page */}
      <a
        onClick={(e) => {
          e.preventDefault();
          setActivePage('references');
          resetGame();
        }}
        className="references-link"
      >
        References
      </a>
      <p>nufc</p>
    </footer>
  );
}
