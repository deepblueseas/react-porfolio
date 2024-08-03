import Navigation from './Navigation';

const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">Tess McGovern</h1>
        <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      </div>
    </header>
  );
};

export default Header;
