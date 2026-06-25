import { useState } from 'react';
import './App.css';

const occasions = ['Birthday', 'Engagement', 'Anniversary'];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState('');

  const handleSelect = (occasion) => {
    setSelectedOccasion(occasion);
    setIsOpen(false);
  };

  return (
    <div className="App">
      <main className="occasion-page">
        <section className="occasion-panel" aria-labelledby="occasion-title">
          <h1 id="occasion-title">Select Occasion</h1>
          <div className="occasion-dropdown">
            <button
              className={`dropdown-trigger ${selectedOccasion ? 'selected' : ''}`}
              type="button"
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              {!selectedOccasion && (
                <span className="occasion-icon" aria-hidden="true">
                  <span />
                  <span />
                </span>
              )}
              <span>{selectedOccasion || 'Occasion'}</span>
              <span className="chevron" aria-hidden="true" />
            </button>

            {isOpen && (
              <ul className="dropdown-options" role="listbox" aria-label="Occasion options">
                {occasions.map((occasion) => (
                  <li key={occasion}>
                    <button type="button" role="option" onClick={() => handleSelect(occasion)}>
                      {occasion}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
