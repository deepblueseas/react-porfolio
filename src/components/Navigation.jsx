import React from 'react';

const Navigation = ({ currentSection, setCurrentSection }) => {
  const linkStyle = {
    border: '1px solid black',
    padding: '5px 10px',
    cursor: 'pointer',
    margin: '0 10px',
    borderRadius: '5px',
    backgroundColor: 'white',
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: 'rgb(246, 246, 166)',
  };

  return (
    <nav className="main-header-menu">
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
    </nav>
  );
};

export default Navigation;
