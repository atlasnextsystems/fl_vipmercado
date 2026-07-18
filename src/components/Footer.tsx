import { useState, useEffect } from 'react';

export default function Footer() {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentMinute = hours * 60 + minutes;

      const openTime = 510; // 08:30
      const closeTime = 1140; // 19:00

      if (day === 0) {
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
    const interval = setInterval(checkOpenStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-neutral-ink text-white/90 pt-16 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Mobile-first: stacked grid, splitting on medium screens and up */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 pb-12 border-b border-white/10">

          {/* Brand & Social Column */}
          <div className="flex flex-col text-left">
            <a href="#" className="flex items-center gap-3 mb-5 group">
              <img src="/logo.svg" alt="Logo Supermercado Vip 10" className="h-14 w-auto sm:h-18 invert-0 transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black text-white tracking-tight transition-colors duration-300 group-hover:text-brand-orange leading-none">VIP 10</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-orange leading-none mt-0.5 transition-colors duration-300 group-hover:text-white">Mercado</span>
              </div>
            </a>
            <p className="text-base text-white/60 leading-relaxed max-w-sm font-medium">
              Sua parada obrigatória para compras de qualidade em Salto. Oferecemos frescor, economia e o melhor atendimento da região.
            </p>

            {/* Social Icons (SVG) */}
            <div className="mt-6 flex items-center gap-4">
              {/* Instagram */}
              <a href="#" className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all focus-visible:outline-2 focus-visible:outline-brand-orange" aria-label="Instagram">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all focus-visible:outline-2 focus-visible:outline-brand-orange" aria-label="Facebook">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/5511971672012" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all focus-visible:outline-2 focus-visible:outline-brand-orange" aria-label="WhatsApp">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.457 5.709 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
              </a>
            </div>
          </div>

          {/* Opening Hours Column */}
          <div className="flex flex-col text-left">
            <h3 className="font-display text-lg font-bold text-white mb-4">Horário de Funcionamento</h3>

            <ul className="space-y-3 text-base text-white/70 font-medium">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Segunda a Sábado</span>
                <span className="font-bold text-white">08:30 às 19:00</span>
              </li>
              <li className="flex justify-between pb-2 text-white/40">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>

            {/* Dynamic Status Badge */}
            {mounted && (
              <div
                className={`mt-5 inline-flex items-center gap-2 self-start rounded-xl px-3.5 py-1.5 text-xs font-semibold border ${isOpenNow
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}
              >
                <span className={`h-2 w-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`}></span>
                {isOpenNow ? 'Aberto Agora' : 'Fechado no Momento'}
              </div>
            )}
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col text-left">
            <h3 className="font-display text-lg font-bold text-white mb-4">Contato Institucional</h3>

            <ul className="space-y-4 text-base text-white/70 font-medium">
              <li className="flex gap-3 items-center">
                <svg className="h-5 w-5 text-white/45 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Telefone / WhatsApp</p>
                  <a href="tel:+5511971672012" className="hover:text-brand-orange transition-colors">(11) 97167-2012</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <svg className="h-5 w-5 text-white/45 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider">E-mail de Contato</p>
                  <a href="mailto:supermercadovip@gmail.com" className="hover:text-brand-orange transition-colors">supermercadovip@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyrights and Credits */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Supermercado Vip 10. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido e Distribuído por</span>
            <a href="https://atlasnextsystems.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white/60 hover:text-brand-orange transition-colors">
              Atlas
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
