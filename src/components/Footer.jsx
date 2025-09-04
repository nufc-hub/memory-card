export default function Footer(setActivePage) {
  return (
    <div className="footer">
      {/* Links to references page */}
      <button onClick={() => setActivePage('references')}>References</button>
    </div>
  );
}
