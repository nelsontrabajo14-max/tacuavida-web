import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import historiaImage from '../../tacuavidaPlusImg/optimized/fotoInicio.webp';

const values = [
  {
    title: 'Comodidad',
    description:
      'Espacios diseñados para que te sientas cómodo desde el primer día, con todo lo que necesitás al alcance de la mano.',
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    title: 'Seguridad',
    description:
      'Un entorno seguro y confiable para que vos y tu familia estén tranquilos en todo momento.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: 'Comunidad',
    description:
      'Fomentamos los vínculos entre residentes porque creemos que un buen ambiente hace que cada estadía sea especial.',
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

const teamMembers = [
  { initials: 'NA', name: 'Nombre Apellido', role: 'Rol / Cargo' },
  { initials: 'NA', name: 'Nombre Apellido', role: 'Rol / Cargo' },
  { initials: 'NA', name: 'Nombre Apellido', role: 'Rol / Cargo' },
];

const statistics = [
  { value: 50, prefix: '+', label: 'Residentes felices' },
  { value: 2, label: 'Propuestas disponibles' },
  { text: 'X', label: 'Años de experiencia' },
  { text: '24/7', label: 'Atención al residente' },
];

function SectionHeading({ label, children }: { label: string; children: string }) {
  return (
    <div className="nos-seccion-encabezado">
      <span className="nos-label">{label}</span>
      <h2>{children}</h2>
    </div>
  );
}

function HistorySection() {
  return (
    <section className="nos-historia">
      <div className="nos-container">
        <div className="nos-historia-grid">
          <div className="nos-historia-texto reveal-left">
            <span className="nos-label">Nuestra historia</span>
            <h2>¿Quiénes somos?</h2>
            <p>
              Tacuavida nació con una misión clara: ofrecer un espacio donde cada residente se sienta
              en casa. Desde nuestros inicios, apostamos por combinar comodidad, diseño y un ambiente
              de comunidad que hace la diferencia.
            </p>
            <p>
              Ubicados en Dr. Elias Abdo 259, Tacuarembó, contamos con dos propuestas —{' '}
              <strong>Tacuavida</strong> y <strong>Tacuavida Plus</strong> — pensadas para distintas
              necesidades, con el mismo nivel de cuidado y atención en ambas.
            </p>
            <Link to="/contacto" className="nos-btn">Contactanos</Link>
          </div>
          <div className="nos-historia-imagen reveal-right">
            <img src={historiaImage} alt="Espacio de Tacuavida" loading="lazy" />
            <div className="nos-historia-badge">
              <strong>+X</strong>
              <span>años de experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="nos-valores">
      <div className="nos-container">
        <SectionHeading label="Lo que nos define">Nuestros pilares</SectionHeading>
        <div className="nos-valores-grid">
          {values.map((value, index) => (
            <article className={`nos-valor-card reveal reveal-delay-${index + 1}`} key={value.title}>
              <div className="nos-valor-icono">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {value.icon}
                </svg>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NumbersSection() {
  return (
    <section className="nos-numeros">
      <div className="nos-container">
        <div className="nos-numeros-grid">
          {statistics.map((statistic, index) => (
            <Fragment key={statistic.label}>
              <div className="nos-numero-item">
                <strong
                  {...(statistic.value !== undefined
                    ? {
                        'data-counter': statistic.value,
                        'data-prefix': statistic.prefix ?? '',
                      }
                    : {})}
                >
                  {statistic.value !== undefined
                    ? `${statistic.prefix ?? ''}${statistic.value}`
                    : statistic.text}
                </strong>
                <span>{statistic.label}</span>
              </div>
              {index < statistics.length - 1 && <div className="nos-numero-sep" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="nos-equipo">
      <div className="nos-container">
        <SectionHeading label="Las personas detrás">Nuestro equipo</SectionHeading>
        <div className="nos-equipo-grid">
          {teamMembers.map((member, index) => (
            <article className={`nos-persona-card reveal reveal-delay-${index + 1}`} key={index}>
              <div className="nos-persona-foto nos-persona-iniciales" aria-hidden="true">
                {member.initials}
              </div>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCallToAction() {
  return (
    <section className="nos-cta">
      <div className="nos-cta-deco nos-cta-deco-1" />
      <div className="nos-cta-deco nos-cta-deco-2" />
      <div className="nos-container nos-cta-contenido">
        <h2>¿Querés saber más?</h2>
        <p>Escribinos y te contamos todo sobre nuestras propuestas y disponibilidad.</p>
        <div className="nos-cta-botones">
          <Link to="/contacto" className="nos-btn">Contactanos</Link>
          <Link to="/tacuavida" className="nos-btn nos-btn-outline">Ver galería</Link>
        </div>
      </div>
    </section>
  );
}

export default function NosotrosPage() {
  useEffect(() => {
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
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((element) => {
      revealObserver.observe(element);
    });

    const counters = document.querySelectorAll<HTMLElement>('[data-counter]');
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const target = Number.parseInt(element.dataset.counter ?? '', 10);
          if (!Number.isFinite(target)) {
            observer.unobserve(element);
            return;
          }

          const prefix = element.dataset.prefix ?? '';
          const suffix = element.dataset.suffix ?? '';
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / 1600, 1);
            const easedProgress = 1 - (1 - progress) ** 3;
            element.textContent = `${prefix}${Math.round(easedProgress * target)}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.unobserve(element);
        });
      },
      { threshold: 0.4 },
    );
    counters.forEach((counter) => counterObserver.observe(counter));

    const hero = document.querySelector<HTMLElement>('.nos-hero[data-parallax]');
    const updateParallax = () => {
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      const speed = Number.parseFloat(hero.dataset.parallax ?? '') || 0.25;
      hero.style.backgroundPositionY = `calc(50% + ${bounds.top * speed}px)`;
    };

    if (hero) {
      window.addEventListener('scroll', updateParallax, { passive: true });
      updateParallax();
    }

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      window.removeEventListener('scroll', updateParallax);
    };
  }, []);

  return (
    <main>
      <section className="nos-hero" data-parallax="0.25">
        <div className="nos-hero-overlay" />
        <div className="nos-hero-contenido">
          <span className="nos-chip">Nosotros</span>
          <h1>
            Quiénes somos
            <br />
            <em>y qué nos mueve</em>
          </h1>
          <p>
            Brindando confort, seguridad y comunidad
            <br />
            en el corazón de Tacuarembó.
          </p>
        </div>
        <div className="nos-hero-scroll">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>
      <HistorySection />
      <ValuesSection />
      <NumbersSection />
      <TeamSection />
      <FinalCallToAction />
    </main>
  );
}
