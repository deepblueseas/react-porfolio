import Navigation from "./Navigation";

const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header>
      <h1>Tess McGovern</h1>
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </header>
  );
};

export default Header;
