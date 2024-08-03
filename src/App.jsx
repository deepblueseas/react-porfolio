import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('About');

  const renderSection = () => {
    switch (currentSection) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;
