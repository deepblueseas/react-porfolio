export default function Footer() {
    const linkStyle = { border: '1px black', padding: '5px' };
  
    return (
      <nav className="footer">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <div style={linkStyle}>
            <a href="#">Email Me</a>
          </div>
          <div style={linkStyle}>
            <a href="#">LinkedIn</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Github</a>
          </div>
        </section>
      </nav>
    );
  }