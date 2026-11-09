import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Tacuavida</Link>
          <p className="footer-tagline">
            Tu hogar lejos de casa,<br />
            en el corazón de Tacuarembó.
          </p>
        </div>
        <div>
          <p className="footer-col-titulo">Navegación</p>
          <nav className="footer-nav" aria-label="Pie de página">
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/tacuavida">Tacuavida</Link>
            <Link to="/tacuavida-plus">Tacuavida Plus</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>
        <div>
          <p className="footer-col-titulo">Contacto</p>
          <div className="footer-contacto">
            <p>Dr. Elias Abdo 259, Tacuarembó</p>
            <a href="tel:+59891495747">091 495 747</a>
            <a href="mailto:contacto@tacuavida.com">contacto@tacuavida.com</a>
          </div>
        </div>
        <div>
          <p className="footer-col-titulo">Redes</p>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/residencial.tacuavida/"
              aria-label="Instagram"
              className="footer-social-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://wa.me/59891495747"
              aria-label="WhatsApp"
              className="footer-social-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Tacuavida · Tacuarembó, Uruguay · Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
