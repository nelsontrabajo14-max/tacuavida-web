import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import './styles/style.css';
import './styles/index.css';
import './styles/nosotros.css';
import './styles/galeria.css';
import './styles/contacto.css';

const appNode = document.getElementById('root');

if (!appNode) {
  throw new Error('No se encontró el elemento #root para montar la aplicación.');
}

function SiteLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

createRoot(appNode).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="nosotros" element={<NosotrosPage />} />
        <Route path="tacuavida" element={<GalleryPage />} />
        <Route path="tacuavida-plus" element={<GalleryPage plus />} />
        <Route path="contacto" element={<ContactPage />} />
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="nosotros.html" element={<Navigate to="/nosotros" replace />} />
        <Route path="tacuavida.html" element={<Navigate to="/tacuavida" replace />} />
        <Route path="tacuavida_plus.html" element={<Navigate to="/tacuavida-plus" replace />} />
        <Route path="contacto.html" element={<Navigate to="/contacto" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>,
);
