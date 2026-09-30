function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "#ffffff",
        padding: "20px 0",
      }}
    >
      <div className="container">
        <p className="text-center text-secondary mb-0">
          © {new Date().getFullYear()} Christopher Suan - Cabuyao, Laguna PH
        </p>
      </div>
    </footer>
  );
}

export default Footer;
