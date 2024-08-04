import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-left">
          <FontAwesomeIcon className="header-icon" icon={faCat} size="3x" />
          <h1 className="header-title">Tess McGovern</h1>
        </div>
        <div className="header-navigation">
          <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
        </div>
      </div>
    </header>
  );
};

export default Header;
