import { useEffect, useState, type MouseEvent } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoUrl from '../../tacuavidaPlusImg/optimized/logo1.webp';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const { pathname } = useLocation();
  const isGalleryPage = pathname === '/tacuavida' || pathname === '/tacuavida-plus';

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener('resize', closeMenuOnDesktop);
    return () => window.removeEventListener('resize', closeMenuOnDesktop);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
    setGalleryOpen(false);
  }

  function handleGalleryToggle(event: MouseEvent<HTMLAnchorElement>) {
    if (window.innerWidth <= 768) {
      event.preventDefault();
      setGalleryOpen((open) => !open);
    }
  }

  return (
    <header className="encabezado">
      <Link className="logo" to="/" onClick={closeMenu}>
        <img src={logoUrl} alt="Tacuavida" />
      </Link>

      <button
        className={`hamburger${menuOpen ? ' abierto' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`menu${menuOpen ? ' abierto' : ''}`} id="menu">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'activo' : '')} onClick={closeMenu}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'activo' : '')} onClick={closeMenu}>
              Nosotros
            </NavLink>
          </li>
          <li className={`dropdown${galleryOpen ? ' abierto' : ''}`}>
            <a
              href="#"
              className={`dropdown-toggle${isGalleryPage ? ' activo' : ''}`}
              aria-haspopup="true"
              aria-expanded={galleryOpen}
              onClick={handleGalleryToggle}
            >
              Galería
              <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
            <ul className="submenu">
              <li>
                <NavLink to="/tacuavida" className={({ isActive }) => (isActive ? 'activo' : '')} onClick={closeMenu}>
                  Tacuavida
                </NavLink>
              </li>
              <li>
                <NavLink to="/tacuavida-plus" className={({ isActive }) => (isActive ? 'activo' : '')} onClick={closeMenu}>
                  Tacuavida Plus
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `btn-contacto${isActive ? ' activo' : ''}`}
              to="/contacto"
              onClick={closeMenu}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>

      <div
        className={`overlay${menuOpen ? ' visible' : ''}`}
        aria-hidden="true"
        onClick={closeMenu}
      />
    </header>
  );
}
