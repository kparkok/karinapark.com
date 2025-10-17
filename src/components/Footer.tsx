function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem",
        marginTop: "4rem",
        borderTop: "1px solid #e5e7eb",
        marginBottom: "0rem",

        color: "#6b7280",
        fontSize: "0.875rem",
      }}
    >
      <div>Built by Karina Park © {new Date().getFullYear()}</div>
      <div>All rights reserved.</div>
    </footer>
  );
}

export default Footer;
