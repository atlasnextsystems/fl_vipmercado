import { useState, useEffect, useRef } from 'react';
import { STORES } from '../data/stores';

export default function Location() {
  const [activeStoreId, setActiveStoreId] = useState(STORES[0].id);
  const [isAnimating, setIsAnimating] = useState(false);
  const pendingStoreId = useRef<string | null>(null);

  // Handle tab switch with fade-out → swap → fade-in
  const handleStoreChange = (id: string) => {
    if (id === activeStoreId || isAnimating) return;
    pendingStoreId.current = id;
    setIsAnimating(true); // triggers fade-out
  };

  // After fade-out completes (300ms), swap content and fade back in
  useEffect(() => {
    if (!isAnimating) return;
    const timer = setTimeout(() => {
      if (pendingStoreId.current) {
        setActiveStoreId(pendingStoreId.current);
        pendingStoreId.current = null;
      }
      // Small delay so React renders the new content before fade-in starts
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsAnimating(false));
      });
    }, 280);
    return () => clearTimeout(timer);
  }, [isAnimating]);

  const activeStore = STORES.find((s) => s.id === activeStoreId) || STORES[0];

  return (
    <section id="localizacao" className="bg-white py-20 sm:py-24 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange">
            Nossas Lojas
          </span>
          <h2 className="font-display text-4xl font-black tracking-tight text-neutral-ink sm:text-5xl mt-2">
            Localização
          </h2>
          <p className="mt-4 text-lg text-neutral-muted font-medium">
            Escolha a unidade mais próxima de você e venha conferir nossas ofertas e produtos frescos.
          </p>
        </div>

        {/* Unit Selector Tabs - Center aligned */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-neutral-bg-soft p-1.5 border border-neutral-border/60 shadow-xs">
            {STORES.map((store) => {
              const isActive = activeStoreId === store.id;
              return (
                <button
                  key={store.id}
                  onClick={() => handleStoreChange(store.id)}
                  disabled={isAnimating}
                  className={`rounded-lg px-6 py-2.5 text-sm font-extrabold tracking-tight transition-all duration-300 cursor-pointer outline-none border disabled:cursor-not-allowed ${isActive
                      ? 'bg-white text-brand-orange shadow-xs border-neutral-border/10'
                      : 'text-neutral-muted hover:text-neutral-ink border-transparent'
                    }`}
                >
                  {store.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile-first: stacked grid — wrapped in animated container */}
        <div
          className={`grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center transition-all duration-300 ease-out ${
            isAnimating
              ? 'opacity-0 translate-y-3 pointer-events-none'
              : 'opacity-100 translate-y-0'
          }`}
        >

          {/* Address Info Panel */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange mb-2">
              {activeStore.name}
            </span>
            <h3 className="font-display text-3xl font-black tracking-tight text-neutral-ink sm:text-4xl leading-tight">
              Venha nos visitar!
            </h3>
            <p className="mt-4 text-base text-neutral-muted leading-relaxed font-medium">
              Oferecemos estacionamento privativo gratuito, corredores amplos, ambiente climatizado e atendimento de excelência para sua melhor experiência de compra.
            </p>

            {/* Structured Location Details */}
            <div className="mt-8 space-y-6">
              {/* Address card */}
              <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/5 text-brand-orange">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-neutral-ink">Endereço</h4>
                  <p className="mt-1 text-base text-neutral-muted leading-relaxed font-medium">
                    {activeStore.address}<br />
                    {activeStore.cep}
                  </p>
                </div>
              </div>

              {/* Coverage area card */}
              <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/5 text-brand-orange">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-neutral-ink">Área de Atendimento</h4>
                  <p className="mt-1 text-base text-neutral-muted font-medium">
                    Atendemos toda a cidade de {activeStore.city} e região próxima.
                  </p>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/5 text-brand-orange">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-neutral-ink">Horário de Funcionamento</h4>
                  <p className="mt-1 text-base text-neutral-muted font-medium">
                    {activeStore.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Route Navigation CTA */}
            <div className="mt-8">
              <a
                href={activeStore.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-7 py-3.5 text-base sm:text-lg font-bold text-white shadow-sm transition-all hover:bg-brand-orange-hover hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
              >
                Traçar Rota no Google Maps
              </a>
            </div>
          </div>

          {/* Interactive Google Map Iframe */}
          <div className="lg:col-span-7 w-full h-[300px] sm:h-[400px] lg:h-[480px] overflow-hidden rounded-2xl border border-neutral-border bg-neutral-bg-soft shadow-xs relative">
            <iframe
              key={activeStore.id}
              src={activeStore.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização do Supermercado Vip 10 - ${activeStore.name} no Google Maps`}
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
