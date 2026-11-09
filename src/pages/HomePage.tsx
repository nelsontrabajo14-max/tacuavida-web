import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fotoInicio from '../../tacuavidaPlusImg/optimized/foto_inicio.webp';
import plusBano1 from '../../tacuavidaPlusImg/optimized/plusBano1.webp';
import plusCocina from '../../tacuavidaPlusImg/optimized/plusCocina.webp';
import plusHabitacion1 from '../../tacuavidaPlusImg/optimized/plusHabitacion1.webp';
import plusOficina from '../../tacuavidaPlusImg/optimized/plusOficina.webp';
import plusSala1 from '../../tacuavidaPlusImg/optimized/plusSala1.webp';
import plusSala2 from '../../tacuavidaPlusImg/optimized/plusSala2.webp';

const proposals = [
  {
    name: 'Tacuavida',
    description:
      'Espacios cómodos y funcionales pensados para quienes buscan una estadía práctica con todo lo necesario.',
    image: fotoInicio,
    imageAlt: 'Habitación Tacuavida',
    to: '/tacuavida',
  },
  {
    name: 'Tacuavida Plus',
    description:
      'Una experiencia superior con ambientes más amplios, mejores terminaciones y servicios adicionales incluidos.',
    image: fotoInicio,
    imageAlt: 'Habitación Tacuavida Plus',
    to: '/tacuavida-plus',
    featured: true,
  },
];

const advantages = [
  {
    title: 'Ubicación privilegiada',
    description: 'En el centro de Tacuarembó, cerca de todo lo que necesitás.',
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    title: 'Seguridad 24/7',
    description: 'Instalaciones seguras para que vos y tu familia estén tranquilos.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: 'Espacios confortables',
    description: 'Ambientes diseñados con atención al detalle para que te sientas en casa.',
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    title: 'Comunidad activa',
    description: 'Un ambiente donde se forman lazos y cada estadía se vuelve única.',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
];

const previewImages = [
  { src: plusCocina, alt: 'Cocina', className: 'preview-item--grande' },
  { src: plusHabitacion1, alt: 'Habitación' },
  { src: plusOficina, alt: 'Espacio de trabajo' },
  { src: plusSala1, alt: 'Sala de estar' },
  { src: plusSala2, alt: 'Sala de estar', className: 'preview-item--ancho' },
  { src: plusBano1, alt: 'Baño' },
];

function SectionHeading({ label, children }: { label: string; children: string }) {
  return (
    <div className="idx-encabezado">
      <span className="idx-label">{label}</span>
      <h2>{children}</h2>
    </div>
  );
}

function ProposalsSection() {
  return (
    <section className="propuestas">
      <div className="idx-container">
        <div className="propuestas-grid">
          {proposals.map((proposal, index) => (
            <article
              className={`propuesta-card reveal reveal-delay-${index + 1}${proposal.featured ? ' propuesta-card--destacada' : ''}`}
              key={proposal.name}
            >
              {proposal.featured && <div className="propuesta-badge">Plus</div>}
              <div className="propuesta-img">
                <img src={proposal.image} alt={proposal.imageAlt} loading="lazy" />
              </div>
              <div className="propuesta-body">
                <h3>{proposal.name}</h3>
                <p>{proposal.description}</p>
                <Link to={proposal.to} className="propuesta-link">
                  Ver galería
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section className="ventajas">
      <div className="idx-container">
        <SectionHeading label="¿Por qué elegirnos?">Lo que nos hace diferentes</SectionHeading>
        <div className="ventajas-grid">
          {advantages.map((advantage, index) => (
            <article className={`ventaja-item reveal reveal-delay-${index + 1}`} key={advantage.title}>
              <div className="ventaja-icono">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {advantage.icon}
                </svg>
              </div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </article>
          ))}
        </div>
        <div className="ventajas-cta">
          <p>
            ¿Querés conocer nuestros espacios? <Link to="/contacto">Hablemos</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function GalleryPreviewSection() {
  return (
    <section className="preview-galeria">
      <div className="idx-container">
        <SectionHeading label="Galería">Un vistazo a nuestros espacios</SectionHeading>
      </div>
      <div className="preview-grid">
        {previewImages.map((image, index) => (
          <div
            className={`preview-item${image.className ? ` ${image.className}` : ''}`}
            key={image.alt + index}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="preview-ver-mas">
        <Link to="/tacuavida" className="btn-primario">Ver galería completa</Link>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="resenas-section">
      <div className="idx-container">
        <SectionHeading label="Lo que dicen">Opiniones de nuestros residentes</SectionHeading>
        <div className="resenas-layout">
          <div className="resena-form-wrapper">
            <h3>Dejá tu reseña</h3>
            <form>
              <div className="resena-campo">
                <label htmlFor="resena-nombre">Tu nombre <span className="req">*</span></label>
                <input id="resena-nombre" type="text" placeholder="Juan García" />
              </div>
              <div className="resena-campo">
                <label htmlFor="resena-propiedad">Propuesta <span className="req">*</span></label>
                <select id="resena-propiedad" defaultValue="">
                  <option value="">Seleccioná una propuesta</option>
                  <option value="Tacuavida">Tacuavida</option>
                  <option value="Tacuavida Plus">Tacuavida Plus</option>
                </select>
              </div>
              <div className="resena-campo">
                <label>Puntuación <span className="req">*</span></label>
                <div className="resena-estrellas">
                  {Array.from({ length: 5 }, (_, index) => (
                    <button type="button" aria-label={`${index + 1} ${index === 0 ? 'estrella' : 'estrellas'}`} key={index}>
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div className="resena-campo">
                <label htmlFor="resena-texto">Tu reseña <span className="req">*</span></label>
                <textarea id="resena-texto" rows={4} placeholder="Contanos tu experiencia..." />
              </div>
              <button type="button" className="resena-btn" disabled>
                <span className="resena-btn-texto">Publicar reseña</span>
              </button>
            </form>
          </div>
          <div className="resenas-lista-wrapper">
            <p className="resenas-vacia">
              Las reseñas estarán disponibles una vez configurado Firebase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCallToAction() {
  return (
    <section className="idx-cta">
      <div className="idx-cta-deco idx-cta-deco-1" />
      <div className="idx-cta-deco idx-cta-deco-2" />
      <div className="idx-container idx-cta-contenido">
        <span className="idx-cta-label">Estamos esperándote</span>
        <h2>¿Listo para conocernos?</h2>
        <p>
          Escribinos y te contamos todo sobre disponibilidad y precios.
          <br />
          Respondemos a la brevedad.
        </p>
        <div className="idx-cta-botones">
          <Link to="/contacto" className="btn-primario">Contactanos ahora</Link>
          <Link to="/nosotros" className="btn-secundario btn-secundario--oscuro">
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealElements.forEach((element) => revealObserver.observe(element));

    const parallaxElements = document.querySelectorAll<HTMLElement>('[data-parallax]');
    const updateParallax = () => {
      parallaxElements.forEach((element) => {
        const bounds = element.getBoundingClientRect();
        if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
        const speed = Number.parseFloat(element.dataset.parallax ?? '') || 0.25;
        element.style.backgroundPositionY = `calc(50% + ${bounds.top * speed}px)`;
      });
    };

    if (parallaxElements.length > 0) {
      window.addEventListener('scroll', updateParallax, { passive: true });
      updateParallax();
    }

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', updateParallax);
    };
  }, []);

  return (
    <main>
      <section className="hero" data-parallax="0.25">
        <div className="hero-overlay" />
        <div className="hero-contenido">
          <h1>Tu hogar lejos de casa</h1>
          <p>Comodidad, seguridad y comunidad en el corazón de Tacuarembó.</p>
          <div className="hero-botones">
            <Link to="/contacto" className="btn-primario">
              Contactanos
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>
      <ProposalsSection />
      <AdvantagesSection />
      <GalleryPreviewSection />
      <ReviewsSection />
      <FinalCallToAction />
    </main>
  );
}
