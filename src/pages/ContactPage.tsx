import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
  type ReactNode,
} from 'react';

const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
type ContactStatus = 'idle' | 'sending' | 'success' | 'error';
type FormField = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function ContactInformation() {
  return (
    <section className="panel-izq" aria-label="Información de contacto">
      <div className="deco-circulo deco-c1" />
      <div className="deco-circulo deco-c2" />
      <div className="deco-dots" />
      <div className="panel-izq-contenido">
        <div className="panel-marca">
          <span className="panel-chip">Contacto</span>
          <h1>
            Estamos para <em>ayudarte</em>
          </h1>
          <p>Contanos tu proyecto o consulta y nos ponemos en contacto a la brevedad.</p>
        </div>
        <ul className="panel-info-lista">
          <li>
            <div className="panel-info-icono">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <span className="panel-info-label">Ubicación</span>
              <span className="panel-info-valor">
                Dr. Elias Abdo 259, 45000 Tacuarembó, Departamento de Tacuarembó
              </span>
            </div>
          </li>
          <li>
            <div className="panel-info-icono">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.04z" />
              </svg>
            </div>
            <div>
              <span className="panel-info-label">Teléfono</span>
              <a className="panel-info-valor" href="tel:+59891495747">091 495 747</a>
            </div>
          </li>
          <li>
            <div className="panel-info-icono">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <span className="panel-info-label">Correo</span>
              <a className="panel-info-valor" href="mailto:contacto@tacuavida.com">
                contacto@tacuavida.com
              </a>
            </div>
          </li>
          <li>
            <div className="panel-info-icono">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <span className="panel-info-label">Horario</span>
              <span className="panel-info-valor">Lun – Vie · 9 a 18 hs</span>
            </div>
          </li>
        </ul>
        <div className="panel-social">
          <a href="https://www.instagram.com/residencial.tacuavida/" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://wa.me/59891495747" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactField({
  id,
  label,
  error,
  suffix,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  suffix?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className={`campo${error ? ' con-error' : ''}`}>
      {children}
      <label htmlFor={id}>
        {label}
        {id !== 'telefono' && <span className="req-star"> *</span>}
      </label>
      {error && <span className="error-msg">{error}</span>}
      {suffix}
    </div>
  );
}

export default function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState<ContactStatus>('idle');

  function validateField(field: FormField): boolean {
    const empty = field.value.trim() === '';
    const invalidEmail =
      field instanceof HTMLInputElement &&
      field.type === 'email' &&
      field.value !== '' &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
    const message = empty
      ? field.id === 'email'
        ? 'Ingresá tu correo electrónico.'
        : field.id === 'asunto'
          ? 'Seleccioná un asunto.'
          : field.id === 'mensaje'
            ? 'El mensaje no puede estar vacío.'
            : 'Ingresá tu nombre completo.'
      : invalidEmail
        ? 'Ingresá un correo válido.'
        : '';

    setErrors((previous) => ({ ...previous, [field.id]: message }));
    return message === '';
  }

  function handleBlur(event: FocusEvent<HTMLFormElement>) {
    const field = event.target;
    if (
      field instanceof HTMLInputElement ||
      field instanceof HTMLSelectElement ||
      field instanceof HTMLTextAreaElement
    ) {
      if (field.required) {
        setTouched((previous) => ({ ...previous, [field.id]: true }));
        validateField(field);
      }
    }
  }

  function handleFieldChange(event: ChangeEvent<FormField>) {
    const field = event.currentTarget;
    if (field.id === 'asunto') setSubject(field.value);
    if (touched[field.id]) validateField(field);
    if (status !== 'idle') setStatus('idle');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[required]'),
    );
    setTouched(Object.fromEntries(fields.map((field) => [field.id, true])));
    const valid = fields.map(validateField).every(Boolean);
    setStatus('idle');

    if (!valid) return;

    setStatus('sending');
    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      form.reset();
      setSubject('');
      setErrors({});
      setTouched({});
      setStatus('success');
      document.getElementById('estado-exito')?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    } catch (error) {
      console.error('No se pudo enviar el formulario de contacto.', error);
      setStatus('error');
    }
  }

  return (
    <main className="contacto-main">
      <div className="contacto-split">
        <ContactInformation />
        <section className="panel-der" aria-labelledby="contact-form-title">
          <div className="form-encabezado">
            <h2 id="contact-form-title">Envianos un mensaje</h2>
            <p>
              Todos los campos marcados con <span className="req-star">*</span> son obligatorios.
            </p>
          </div>

          <form
            action={CONTACT_FORM_ENDPOINT}
            method="POST"
            noValidate
            onBlur={handleBlur}
            onSubmit={handleSubmit}
          >
            <div className="form-fila">
              <ContactField id="nombre" label="Nombre completo" error={errors.nombre}>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder=" "
                  required
                  autoComplete="name"
                  aria-invalid={Boolean(errors.nombre)}
                  onChange={handleFieldChange}
                />
              </ContactField>
              <ContactField id="email" label="Correo electrónico" error={errors.email}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  onChange={handleFieldChange}
                />
              </ContactField>
            </div>

            <div className="form-fila">
              <ContactField id="telefono" label="Teléfono (opcional)">
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder=" "
                  autoComplete="tel"
                  onChange={handleFieldChange}
                />
              </ContactField>
              <ContactField
                id="asunto"
                label="Asunto"
                error={errors.asunto}
                suffix={
                  <svg
                    className="select-chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                }
              >
                <select
                  id="asunto"
                  name="asunto"
                  value={subject}
                  required
                  className={subject ? 'seleccionado' : ''}
                  aria-invalid={Boolean(errors.asunto)}
                  onChange={handleFieldChange}
                >
                  <option value="" disabled />
                  <option value="Información general">Información general</option>
                  <option value="Tacuavida">Tacuavida</option>
                  <option value="Tacuavida Plus">Tacuavida Plus</option>
                  <option value="Presupuesto">Presupuesto</option>
                  <option value="Otro">Otro</option>
                </select>
              </ContactField>
            </div>

            <ContactField id="mensaje" label="Mensaje" error={errors.mensaje}>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder=" "
                rows={5}
                required
                aria-invalid={Boolean(errors.mensaje)}
                onChange={handleFieldChange}
              />
            </ContactField>

            <button type="submit" className="btn-enviar" disabled={status === 'sending'}>
              <span className="btn-texto">
                {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
              </span>
              {status !== 'sending' && (
                <svg
                  className="btn-icono"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              )}
              <span className="btn-spinner" hidden={status !== 'sending'} />
            </button>
          </form>

          <div
            id="estado-exito"
            className="estado-mensaje estado-exito"
            role="status"
            hidden={status !== 'success'}
          >
            <div className="estado-icono">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <strong>¡Mensaje enviado con éxito!</strong>
              <p>Gracias por escribirnos. Te respondemos en menos de 24 hs.</p>
            </div>
          </div>

          <div
            className="estado-mensaje estado-error"
            role="alert"
            hidden={status !== 'error'}
          >
            <div className="estado-icono">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div>
              <strong>Algo salió mal.</strong>
              <p>Por favor intentá de nuevo o escribinos directamente al correo.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
