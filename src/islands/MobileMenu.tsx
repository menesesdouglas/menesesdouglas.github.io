import { useEffect, useState } from 'react';

const links = [
  { href: '#servicos', label: 'Serviços', n: '01' },
  { href: '#portfolio', label: 'Portfólio', n: '02' },
  { href: '#sobre', label: 'Sobre', n: '03' },
  { href: '#faq', label: 'FAQ', n: '04' },
];

interface Props {
  whatsapp: string;
}

export default function MobileMenu({ whatsapp }: Props) {
  const [open, setOpen] = useState(false);

  // Trava o scroll do body enquanto o menu está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Fecha com ESC
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center md:hidden"
      >
        <span className="menu-icon" />
      </button>

      {/* Overlay escuro */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={
          'fixed inset-0 z-40 bg-ink/35 transition-opacity duration-200 md:hidden ' +
          (open ? 'opacity-100' : 'pointer-events-none opacity-0')
        }
      />

      {/* Drawer lateral */}
      <nav
        aria-label="Menu principal"
        aria-hidden={!open}
        className={
          'fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-paper px-7 pt-6 pb-10 ' +
          'transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ' +
          (open ? 'translate-x-0' : 'translate-x-full')
        }
      >
        <div className="flex items-center justify-between">
          <span className="mono-label">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="flex h-9 w-9 items-center justify-center text-ink"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <ul className="mt-12 border-t border-line">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-line py-4 font-mono text-lg text-ink"
              >
                <span className="mono-label">{link.n}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener"
          className="btn btn-primary mt-auto w-full"
        >
          Falar no WhatsApp
        </a>
      </nav>
    </>
  );
}