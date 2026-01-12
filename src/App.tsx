import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/molecules/Navbar';
import ButtonPage from './pages/ButtonPage';
import InputPage from './pages/InputPage';

function App() {
  const [activePage, setActivePage] = useState('button');

  const renderPage = () => {
    switch (activePage) {
      case 'button':
        return <ButtonPage />;
      case 'input':
        return <InputPage />;
      default:
        return (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            Select a component from the sidebar
          </div>
        );
    }
  };

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Navbar />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
