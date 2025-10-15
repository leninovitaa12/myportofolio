export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>© {new Date().getFullYear()} Leni Novitasari</span>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  )
}
