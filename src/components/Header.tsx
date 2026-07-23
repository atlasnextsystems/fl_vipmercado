import { useState, useEffect } from 'react';
import { WHATSAPP_GROUP_URL } from '../data/links';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic status indicator for business hours
  useEffect(() => {
    setMounted(true);
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1-6 = Monday-Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentMinute = hours * 60 + minutes;

      // Monday to Saturday: 08:30 to 19:00
      // 08:30 = 8 * 60 + 30 = 510 minutes
      // 19:00 = 19 * 60 = 1140 minutes
      const openTime = 510;
      const closeTime = 1140;

      if (day === 0) {
        // Closed on Sundays
        setIsOpenNow(false);
      } else {
        if (currentMinute >= openTime && currentMinute < closeTime) {
          setIsOpenNow(true);
        } else {
          setIsOpenNow(false);
        }
      }
    };

    checkOpenStatus();
    // Re-check every 30 seconds
    const interval = setInterval(checkOpenStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const [activeSection, setActiveSection] = useState('');

  // Track scrolling + active section spy via scroll position
  useEffect(() => {
    const sectionIds = ['sobre', 'videos', 'setores', 'facilidades', 'depoimentos', 'localizacao'];

    const updateState = () => {
      // Scrolled flag for header shadow
      setScrolled(window.scrollY > 20);

      // At the very top → no active section
      if (window.scrollY < 80) {
        setActiveSection('');
        return;
      }

      // Find the last section whose top is at or above the threshold
      // (i.e., has entered the viewport past the sticky header)
      const OFFSET = 100; // approx sticky header height + buffer
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= OFFSET) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', updateState, { passive: true });
    updateState(); // run once on mount

    return () => window.removeEventListener('scroll', updateState);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Vídeos', href: '#videos' },
    { name: 'Setores', href: '#setores' },
    { name: 'Facilidades', href: '#facilidades' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Localização', href: '#localizacao' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled
        ? 'bg-white/85 backdrop-blur-md border-neutral-border/40 shadow-xs'
        : 'bg-white/10 backdrop-blur-xs border-transparent'
        }`}>
        <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'py-1.5' : 'py-3'
          }`}>

          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-brand-orange rounded-lg p-1 group" aria-label="Supermercado Vip 10 - Início">
            <img
              src="/logo.svg"
              alt="Logo Supermercado Vip"
              className="h-12 w-auto object-contain sm:h-16"
            />
            <div className="flex flex-col">
              <span className="font-display text-lg font-black tracking-tight text-neutral-ink sm:text-2xl leading-none transition-colors duration-300 group-hover:text-brand-orange">VIP 10</span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-orange leading-none mt-1 transition-colors duration-300 group-hover:text-neutral-ink">Supermercado</span>
            </div>
          </a>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 lg:gap-8" aria-label="Navegação Principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-brand-orange rounded-md px-2 py-1.5 group ${isActive ? 'text-brand-orange' : 'text-neutral-muted hover:text-brand-orange'
                    }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className={`absolute bottom-0 left-2 right-2 h-[2.5px] bg-brand-orange transition-all duration-300 ease-out ${isActive ? 'w-[calc(100%-16px)]' : 'w-0 group-hover:w-[calc(100%-16px)]'
                    }`}></span>
                </a>
              );
            })}
          </nav>

          {/* Status Badge & CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4 lg:gap-6">
            {/* Status Indicator */}
            {mounted && (
              <div
                className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold shadow-xs border ${isOpenNow
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-rose-50 text-rose-700 border-rose-200'
                  }`}
                role="status"
                aria-live="polite"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
                {isOpenNow ? 'Aberto Agora' : 'Fechado no Momento'}
              </div>
            )}

            {/* Contact CTA */}
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-orange-hover hover:scale-[1.02] hover:shadow-md hover:shadow-brand-orange/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange active:scale-95 animate-cta-pulse"
            >
              {/* WhatsApp Icon */}
              <svg className="h-4 w-4 fill-current transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.457 5.709 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Trigger button */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Status Indicator - Mobile (Minimal) */}
            {mounted && (
              <div
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold border ${isOpenNow
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-rose-50 text-rose-700 border-rose-200'
                  }`}
                role="status"
                aria-live="polite"
              >
                <span className={`h-1.5 w-1.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
                {isOpenNow ? 'Aberto' : 'Fechado'}
              </div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-border text-neutral-ink transition-all duration-300 bg-white shadow-sm hover:border-brand-orange/50 hover:text-brand-orange hover:bg-brand-orange/5 focus-visible:outline-2 focus-visible:outline-brand-orange active:scale-95 z-10"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                // Close Icon
                <svg className="h-6 w-6 transition-transform duration-300 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu (Hamburger) Icon
                <svg className="h-6 w-6 transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
          }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Background backdrop overlay with darker opacity for premium feel */}
        <div
          className="absolute inset-0 bg-neutral-ink/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer panel with solid white background */}
        <div
          className={`absolute inset-y-0 right-0 z-50 w-full max-w-xs bg-white px-6 py-6 shadow-2xl border-l border-neutral-border flex flex-col justify-between transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div>
            {/* Header inside drawer */}
            <div className="flex items-center justify-between mb-8">
              <a href="#" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
                <img src="/logo.svg" alt="Logo Supermercado Vip" className="h-13 w-auto" />
                <span className="font-display text-xl font-black text-neutral-ink transition-colors duration-300 group-hover:text-brand-orange">VIP</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-neutral-muted hover:bg-neutral-bg-soft hover:text-neutral-ink focus-visible:outline-2 focus-visible:outline-brand-orange"
                aria-label="Fechar menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links inside drawer */}
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-bold transition-colors py-2 border-b border-neutral-border/40 flex items-center justify-between ${isActive ? 'text-brand-orange border-brand-orange/30' : 'text-neutral-ink hover:text-brand-orange'
                      }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Bottom Actions inside drawer */}
          <div className="mt-auto pt-6 border-t border-neutral-border">
            {mounted && (
              <div className="flex flex-col gap-4">
                {/* Status Badge */}
                <div
                  className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold border ${isOpenNow
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-rose-50 text-rose-700 border-rose-200'
                    }`}
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
                  {isOpenNow ? 'Aberto de Seg a Sáb' : 'Fechado no Momento'}
                </div>

                {/* WhatsApp CTA with Pulse */}
                <a
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-orange-hover animate-cta-pulse"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.457 5.709 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Vertical Dot Tracker (Scroll Spy) - Desktop Only */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4 bg-white/70 backdrop-blur-md border border-neutral-border/40 rounded-full px-2.5 py-5 shadow-sm">
        {navLinks.map((link) => {
          const sectionId = link.href.replace('#', '');
          const isActive = activeSection === sectionId;
          return (
            <a
              key={link.name}
              href={link.href}
              className="relative flex items-center justify-center group p-1.5 focus-visible:outline-none"
              aria-label={`Ir para a seção ${link.name}`}
            >
              {/* Dot indicator */}
              <span className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${isActive
                  ? 'bg-brand-orange scale-125 shadow-sm shadow-brand-orange/40'
                  : 'bg-neutral-ink/20 group-hover:bg-brand-orange/60 group-hover:scale-110'
                }`}></span>

              {/* Hover Tooltip (Sliding from right to left) */}
              <span className="absolute right-9 top-1/2 -translate-y-1/2 scale-90 opacity-0 pointer-events-none transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 bg-neutral-ink text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
                {link.name}
                {/* small triangle pointer */}
                <span className="absolute top-1/2 right-[-3px] -translate-y-1/2 h-1.5 w-1.5 rotate-45 bg-neutral-ink"></span>
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
}
