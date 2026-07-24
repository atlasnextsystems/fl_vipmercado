export default function Facilities() {
  const facilities = [
    {
      icon: (
        <svg className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Cartões de Crédito & Débito',
      desc: 'Aceitamos as principais bandeiras (Visa, Mastercard, Elo, American Express) para sua comodidade e segurança.'
    },
    {
      icon: (
        <svg className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Vale-Alimentação',
      desc: 'Faça suas compras mensais ou semanais usando Sodexo, VR Alimentação, Ticket Alimentação, Alelo e outros.'
    },

  ];

  return (
    <section id="facilidades" className="bg-white py-20 sm:py-24 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Mobile-first Layout: text stacked on top of features grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          
          {/* Header Description (Sticky/Left side on Desktop) */}
          <div className="flex flex-col text-left lg:sticky lg:top-28 lg:h-fit">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange mb-2">
              Feito para você
            </span>
            <h2 className="font-display text-4xl font-black tracking-tight text-neutral-ink sm:text-5xl leading-tight">
              Nossas Facilidades
            </h2>
            <p className="mt-4 text-lg text-neutral-muted leading-relaxed font-medium">
              Trabalhamos constantemente para oferecer o melhor atendimento da região de Salto. Conheça as vantagens e diferenciais em comprar conosco.
            </p>
          </div>

          {/* Grid Layout of Facilities */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {facilities.map((fac) => (
              <div 
                key={fac.title}
                className="flex flex-col justify-between rounded-2xl border border-neutral-border bg-neutral-bg-soft p-7 shadow-xs hover:border-brand-orange/20 transition-all duration-300"
              >
                <div>
                  {/* Icon Circle */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/5 mb-5">
                    {fac.icon}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-neutral-ink mb-3 leading-snug">
                    {fac.title}
                  </h3>
                  <p className="text-base text-neutral-muted leading-relaxed font-medium">
                    {fac.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
