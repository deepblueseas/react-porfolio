export default function Navigation({ currentSection, setCurrentSection }) {
    const linkStyle = {
      border: '1px solid black',
      padding: '5px',
      cursor: 'pointer',
      margin: '0 5px',
    };
  
    const activeLinkStyle = {
      ...linkStyle,
      backgroundColor: 'lightgrey',
    };
  
    return (
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <div
            style={currentSection === 'About' ? activeLinkStyle : linkStyle}
            onClick={() => setCurrentSection('About')}
          >
            About Me
          </div>
          <div
            style={currentSection === 'Portfolio' ? activeLinkStyle : linkStyle}
            onClick={() => setCurrentSection('Portfolio')}
          >
            Portfolio
          </div>
          <div
            style={currentSection === 'Contact' ? activeLinkStyle : linkStyle}
            onClick={() => setCurrentSection('Contact')}
          >
            Contact Me
          </div>
          <div
            style={currentSection === 'Resume' ? activeLinkStyle : linkStyle}
            onClick={() => setCurrentSection('Resume')}
          >
            Resume
          </div>
        </section>
      </nav>
    );
  }