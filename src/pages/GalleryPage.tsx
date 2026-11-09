import { useEffect, useMemo, useRef, useState } from 'react';
import foto1 from '../../tacuavidaPlusImg/optimized/foto1.webp';
import foto2 from '../../tacuavidaPlusImg/optimized/foto2.webp';
import foto3 from '../../tacuavidaPlusImg/optimized/foto3.webp';
import foto4 from '../../tacuavidaPlusImg/optimized/foto4.webp';
import foto5 from '../../tacuavidaPlusImg/optimized/foto5.webp';
import foto6 from '../../tacuavidaPlusImg/optimized/foto6.webp';
import foto7 from '../../tacuavidaPlusImg/optimized/foto7.webp';
import foto8 from '../../tacuavidaPlusImg/optimized/foto8.webp';
import foto9 from '../../tacuavidaPlusImg/optimized/foto9.webp';
import plusBano1 from '../../tacuavidaPlusImg/optimized/plusBano1.webp';
import plusBano2 from '../../tacuavidaPlusImg/optimized/plusBano2.webp';
import plusComedor from '../../tacuavidaPlusImg/optimized/plusComedor.webp';
import plusCocina from '../../tacuavidaPlusImg/optimized/plusCocina.webp';
import plusHabitacion1 from '../../tacuavidaPlusImg/optimized/plusHabitacion1.webp';
import plusHabitacion2 from '../../tacuavidaPlusImg/optimized/plusHabitacion2.webp';
import plusOficina from '../../tacuavidaPlusImg/optimized/plusOficina.webp';
import plusSala1 from '../../tacuavidaPlusImg/optimized/plusSala1.webp';
import plusSala2 from '../../tacuavidaPlusImg/optimized/plusSala2.webp';
import video1 from '../../tacuavidaPlusImg/video1.mp4';
import video2 from '../../tacuavidaPlusImg/video2.mp4';

type GalleryPhoto = {
  type: 'foto';
  src: string;
  alt: string;
  size?: 'grande' | 'ancho';
  category?: string;
};

type GalleryVideo = {
  type: 'video';
  src: string;
  alt: string;
  size?: 'grande' | 'ancho';
};

type GalleryMedia = GalleryPhoto | GalleryVideo;
type FilterType = 'todo' | 'foto' | 'video';

const standardGallery: GalleryMedia[] = [
  { type: 'foto', src: foto1, alt: 'Foto 1', size: 'grande' },
  { type: 'foto', src: foto2, alt: 'Foto 2' },
  { type: 'video', src: video1, alt: 'Video 1' },
  { type: 'foto', src: foto3, alt: 'Foto 3' },
  { type: 'foto', src: foto4, alt: 'Foto 4' },
  { type: 'foto', src: foto5, alt: 'Foto 5' },
  { type: 'video', src: video2, alt: 'Video 2', size: 'ancho' },
  { type: 'foto', src: foto6, alt: 'Foto 6' },
  { type: 'foto', src: foto7, alt: 'Foto 7' },
  { type: 'foto', src: foto8, alt: 'Foto 8' },
  { type: 'foto', src: foto9, alt: 'Foto 9' },
];

const plusGallery: GalleryPhoto[] = [
  { type: 'foto', src: plusSala1, alt: 'Foto exterior 1', size: 'grande', category: 'exterior' },
  { type: 'foto', src: plusOficina, alt: 'Foto interior 1', category: 'interior' },
  { type: 'foto', src: plusSala2, alt: 'Foto detalle 1', category: 'detalles' },
  { type: 'foto', src: plusHabitacion2, alt: 'Foto evento 1', category: 'eventos' },
  { type: 'foto', src: plusHabitacion1, alt: 'Foto exterior 2', category: 'exterior' },
  { type: 'foto', src: plusBano1, alt: 'Foto interior 2', size: 'ancho', category: 'interior' },
  { type: 'foto', src: plusBano2, alt: 'Foto detalle 2', category: 'detalles' },
  { type: 'foto', src: plusComedor, alt: 'Foto evento 2', category: 'eventos' },
  { type: 'foto', src: plusCocina, alt: 'Foto exterior 3', category: 'exterior' },
];

const standardFeatures = [
  { label: 'Wi-Fi incluido', icon: 'wifi' },
  { label: 'Cocina compartida', icon: 'home' },
  { label: 'Seguridad 24/7', icon: 'shield' },
  { label: 'Lavandería', icon: 'laundry' },
];

const plusFeatures = [
  { label: 'Wi-Fi alta velocidad', icon: 'wifi' },
  { label: 'Cocina equipada privada', icon: 'home' },
  { label: 'Seguridad 24/7', icon: 'shield' },
  { label: 'Espacio de trabajo', icon: 'desk' },
  { label: 'Lavandería incluida', icon: 'laundry' },
];

function FeatureIcon({ name }: { name: string }) {
  if (name === 'wifi') {
    return (
      <>
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </>
    );
  }
  if (name === 'home') {
    return (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    );
  }
  if (name === 'shield') {
    return <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;
  }
  if (name === 'desk') {
    return (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    );
  }
  return (
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  );
}

function ZoomIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function GalleryTile({
  media,
  onOpen,
}: {
  media: GalleryMedia;
  onOpen: (button: HTMLButtonElement | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  function previewVideo() {
    if (media.type === 'video') {
      void videoRef.current?.play().catch(() => undefined);
    }
  }

  function stopVideoPreview() {
    const video = videoRef.current;
    if (media.type === 'video' && video) {
      video.pause();
      video.currentTime = 0;
    }
  }

  return (
    <div
      className={`galeria-item${media.size ? ` galeria-item--${media.size}` : ''}`}
      data-tipo={media.type}
      {...(media.type === 'foto' && media.category
        ? { 'data-categoria': media.category }
        : {})}
      onMouseEnter={previewVideo}
      onMouseLeave={stopVideoPreview}
      onClick={(event) => {
        const target = event.target;
        const button =
          target instanceof Element
            ? target.closest<HTMLButtonElement>('.galeria-zoom-btn')
            : null;
        onOpen(button);
      }}
    >
      {media.type === 'foto' ? (
        <img src={media.src} alt={media.alt} loading="lazy" />
      ) : (
        <video ref={videoRef} src={media.src} muted loop playsInline preload="metadata" />
      )}
      <div className="galeria-overlay">
        <span>{media.alt}</span>
        <button
          type="button"
          className={`galeria-zoom-btn${media.type === 'video' ? ' galeria-play-btn' : ''}`}
          aria-label={media.type === 'video' ? 'Ver video' : 'Ver foto'}
        >
          {media.type === 'video' ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          ) : (
            <ZoomIcon />
          )}
        </button>
      </div>
    </div>
  );
}

function Lightbox({
  media,
  onClose,
  onPrevious,
  onNext,
  canNavigate,
}: {
  media: GalleryMedia;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  canNavigate: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Visor de galería"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        className="lightbox-cerrar"
        aria-label="Cerrar"
        onClick={onClose}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      {canNavigate && (
        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          aria-label="Anterior"
          onClick={onPrevious}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}
      <div className="lightbox-contenido">
        {media.type === 'foto' ? (
          <img src={media.src} alt={media.alt} />
        ) : (
          <video ref={videoRef} src={media.src} controls />
        )}
        <p className="lightbox-caption">{media.alt}</p>
      </div>
      {canNavigate && (
        <button
          type="button"
          className="lightbox-nav lightbox-next"
          aria-label="Siguiente"
          onClick={onNext}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default function GalleryPage({ plus = false }: { plus?: boolean }) {
  const media = plus ? plusGallery : standardGallery;
  const [filter, setFilter] = useState<FilterType>('todo');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const filteredMedia = useMemo(
    () => media.filter((item) => filter === 'todo' || item.type === filter),
    [filter, media],
  );
  const selectedMedia =
    selectedIndex === null ? null : filteredMedia[selectedIndex] ?? null;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (selectedIndex === null || !filteredMedia.length) return;
      if (event.key === 'Escape') {
        setSelectedIndex(null);
        if (triggerButtonRef.current?.isConnected) triggerButtonRef.current.focus();
      }
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((index) => (index === null ? null : (index - 1 + filteredMedia.length) % filteredMedia.length));
      }
      if (event.key === 'ArrowRight') {
        setSelectedIndex((index) => (index === null ? null : (index + 1) % filteredMedia.length));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredMedia.length, selectedIndex]);

  function moveSelection(direction: -1 | 1) {
    setSelectedIndex((index) => {
      if (index === null || !filteredMedia.length) return null;
      return (index + direction + filteredMedia.length) % filteredMedia.length;
    });
  }

  const features = plus ? plusFeatures : standardFeatures;

  return (
    <main>
      <section className="galeria-hero">
        <div className="galeria-hero-texto">
          <span className="galeria-chip">Galería</span>
          <h1>{plus ? <>Tacuavida <strong>Plus</strong></> : <>Tacua<strong>vida</strong></>}</h1>
          <p>Descubrí nuestra colección de momentos y espacios únicos.</p>
        </div>
        <div className="galeria-hero-deco" aria-hidden="true">
          <div className="deco-ring deco-ring-1" />
          <div className="deco-ring deco-ring-2" />
        </div>
      </section>

      {!plus && (
        <section className="galeria-filtros-section" aria-label="Filtrar galería">
          <div className="galeria-filtros">
            {(['todo', 'foto', 'video'] as const).map((filterType) => (
              <button
                type="button"
                className={`filtro${filter === filterType ? ' activo' : ''}`}
                aria-pressed={filter === filterType}
                key={filterType}
                onClick={() => {
                  setFilter(filterType);
                  setSelectedIndex(null);
                }}
              >
                {{ todo: 'Todo', foto: 'Fotos', video: 'Videos' }[filterType]}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="galeria-caract">
        <div className="galeria-caract-grid">
          {features.map((feature) => (
            <div className="galeria-caract-item" key={feature.label}>
              <div className="galeria-caract-icono">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <FeatureIcon name={feature.icon} />
                </svg>
              </div>
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="galeria-section">
        <div className="galeria-grid">
          {filteredMedia.map((item, index) => (
            <GalleryTile
              media={item}
              key={`${item.src}-${index}`}
              onOpen={(button) => {
                triggerButtonRef.current = button;
                setSelectedIndex(index);
              }}
            />
          ))}
        </div>
        {filteredMedia.length === 0 && (
          <p className="galeria-vacia">No hay contenido en esta categoría todavía.</p>
        )}
      </section>

      {selectedMedia && (
        <Lightbox
          media={selectedMedia}
          canNavigate={filteredMedia.length > 1}
          onClose={() => {
            setSelectedIndex(null);
            if (triggerButtonRef.current?.isConnected) triggerButtonRef.current.focus();
          }}
          onPrevious={() => moveSelection(-1)}
          onNext={() => moveSelection(1)}
        />
      )}
    </main>
  );
}
