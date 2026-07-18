export default function Location() {
  return (
    <section id="localizacao" className="bg-white py-20 sm:py-24 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Mobile-first: stacked grid, splitting on large viewports */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

          {/* Address Info Panel */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange mb-2">
              Venha nos visitar
            </span>
            <h2 className="font-display text-4xl font-black tracking-tight text-neutral-ink sm:text-5xl leading-tight">
              Nossa Localização
            </h2>
            <p className="mt-4 text-lg text-neutral-muted leading-relaxed font-medium">
              Estamos localizados em uma área central de fácil acesso na cidade de Salto, com estacionamento privativo e infraestrutura completa para receber você e sua família.
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
                  <h4 className="font-display text-lg sm:text-xl font-bold text-neutral-ink">Endereço Oficial</h4>
                  <p className="mt-1 text-base text-neutral-muted leading-relaxed font-medium">
                    Avenida Anita Garibaldi 240, Salto, São Paulo<br />
                    CEP 13323-570
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
                    Atendemos toda a cidade de Salto e região circunvizinha.
                  </p>
                </div>
              </div>
            </div>

            {/* Route Navigation CTA */}
            <div className="mt-8">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Avenida+Anita+Garibaldi+240,+Salto,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-7 py-3.5 text-base sm:text-lg font-bold text-white shadow-sm transition-all hover:bg-brand-orange-hover hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
              >
                Traçar Rota no Google Maps
              </a>
            </div>
          </div>

          {/* Interactive Google Map Iframe */}
          <div className="lg:col-span-7 w-full h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl border border-neutral-border bg-neutral-bg-soft shadow-xs relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6534570077977!2d-47.2847942!3d-23.2010839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f5904ffbc37b%3A0xc0f1b20127167201!2sAv.%20Anita%20Garibaldi%2C%20240%20-%20Salto%2C%20SP%2C%2013323-570!5e0!3m2!1spt-BR!2sbr!4v1784396860000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Supermercado Vip 10 no Google Maps"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
