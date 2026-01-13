import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ButtonPage } from './pages/ButtonPage';
import { InputPage } from './pages/InputPage';
import { CheckboxPage } from './pages/CheckboxPage';
import { BadgePage } from './pages/BadgePage';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="components/button" element={<ButtonPage />} />
          <Route path="components/input" element={<InputPage />} />
          <Route path="components/badge" element={<BadgePage />} />
          <Route path="components/checkbox" element={<CheckboxPage />} />
          <Route path="components/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;