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
      Built by Karina Park © {new Date().getFullYear()} All rights reserved.
    </footer>
  );
}

export default Footer;
