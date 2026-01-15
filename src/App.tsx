import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ButtonPage } from './pages/ButtonPage';
import { InputPage } from './pages/InputPage';
import { CheckboxPage } from './pages/CheckboxPage';
import { BadgePage } from './pages/BadgePage';
import { LoginPage } from './pages/LoginPage';
import { ModalPage } from './pages/ModalPage';
import { CardPage } from './pages/CardPage';
import { PostListPage } from './pages/PostListPage';
import { PostDetailPage } from './pages/PostDetailPage';

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
          <Route path="components/modal" element={<ModalPage />} />
          <Route path="components/card" element={<CardPage />} />
          <Route path="components/post-list" element={<PostListPage />} />
          <Route path="components/post-list/:id" element={<PostDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;