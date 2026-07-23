import { STORES } from '../data/stores';
import { WHATSAPP_GROUP_URL } from '../data/links';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 -z-10 h-80 w-80 rounded-full bg-brand-orange/5 blur-3xl sm:h-96 sm:w-96"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile-first layout: stacked by default, split on medium screens and up */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">

          {/* Text Content Block */}
          <div className="flex flex-col text-center lg:col-span-6 lg:text-left">
            <span className="inline-flex self-center lg:self-start rounded-full bg-brand-orange/10 px-4 py-2 text-xs sm:text-sm font-bold text-brand-orange mb-5 tracking-wider uppercase">
              Quer pagar barato? A gente resolve!
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight text-neutral-ink sm:text-6xl lg:text-7xl leading-tight">
              Incrível supermercado em <span className="text-brand-orange">{STORES.map(s => s.city).join(' e ')}</span>
            </h1>
            <p className="mt-5 text-lg text-neutral-muted sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Produtos frescos, marcas populares e preços justos em {STORES.map(s => s.city).join(' e ')}. Entre no grupo VIP e fique por dentro das ofertas — ou venha nos visitar!
            </p>

            {/* CTA Actions */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              {/* Primary: WhatsApp VIP group */}
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-orange px-7 py-3.5 text-base sm:text-lg font-bold text-white shadow-sm transition-all hover:bg-brand-orange-hover hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange animate-cta-pulse"
              >
                {/* WhatsApp icon */}
                <svg className="h-5 w-5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.457 5.709 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
                Sim! Quero Pagar Barato
              </a>

              {/* Secondary: scroll to location */}
              <a
                href="#localizacao"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-border bg-neutral-bg-soft px-7 py-3.5 text-base sm:text-lg font-bold text-neutral-ink transition-all hover:bg-neutral-border/10 focus-visible:outline-2 focus-visible:outline-brand-orange"
              >
                {/* Map pin icon */}
                <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ver Lojas
              </a>
            </div>
          </div>

          {/* Grid Collage Block - Desktop & Mobile Collage */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            {/* Mobile-first: 1 column stack, desktop: grid collage */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-5">

              {/* Card 1 - Hortifrúti */}
              <div className="group overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-xs transition-all hover:shadow-md sm:col-span-1 lg:col-span-1">
                <div className="aspect-3/2 overflow-hidden bg-neutral-bg-soft">
                  <img
                    src="/hortifruti.jpg"
                    alt="Hortifrúti fresco"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 font-display text-base font-extrabold text-neutral-ink">
                    <svg className="h-5 w-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19a7 7 0 007-7c0-4-3-8-7-10-4 2-7 6-7 10a7 7 0 007 7z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v10" />
                    </svg>
                    <span>Hortifrúti</span>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-neutral-muted">Frutas e vegetais frescos diariamente selecionados.</p>
                </div>
              </div>

              {/* Card 2 - Bebidas */}
              <div className="group overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-xs transition-all hover:shadow-md sm:col-span-1 lg:col-span-1">
                <div className="p-5">
                  <div className="flex items-center gap-2 font-display text-base font-extrabold text-neutral-ink">
                    <svg className="h-5 w-5 text-blue-600 shrink-0" fill="currentColor" viewBox="-19.96 0 55.118 55.118" xmlns="http://www.w3.org/2000/svg">
                      <g transform="translate(-577.289 -319.387)">
                        <path d="M584.883,374.505c-3.781,0-7.594-.96-7.594-3.1v-17.53c0-2.642,1.093-6.864,2.149-10.947.984-3.8,2-7.734,2-9.925v-9.79a1,1,0,0,1,2,0V333c0,2.445-1,6.321-2.064,10.426-1.025,3.962-2.086,8.058-2.086,10.446v17.448c.31.377,2.218,1.186,5.594,1.186s5.284-.809,5.594-1.186V353.871c0-2.388-1.061-6.484-2.086-10.446-1.062-4.1-2.065-7.981-2.065-10.426v-9.79a1,1,0,0,1,2,0V333c0,2.191,1.018,6.122,2,9.925,1.057,4.083,2.15,8.3,2.15,10.947V371.4C592.477,373.545,588.663,374.505,584.883,374.505Z" />
                      </g>
                    </svg>
                    <span>Bebidas</span>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-neutral-muted">Cervejas, refrigerantes, vinhos e destilados.</p>
                </div>
              </div>

              {/* Card 3 - Frios */}
              <div className="group overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-xs transition-all hover:shadow-md sm:col-span-1 lg:col-span-1">
                <div className="p-5">
                  <div className="flex items-center gap-2 font-display text-base font-extrabold text-neutral-ink">
                    <svg className="h-5 w-5 text-yellow-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.91" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.09,14.86a1.9,1.9,0,0,1-1.9-1.79.49.49,0,0,1,0-.12,1.91,1.91,0,0,1,3.71-.62A1.84,1.84,0,0,1,12,13,1.9,1.9,0,0,1,10.09,14.86Z"/>
                      <path d="M22.5,9.9v8.4L10.89,20.62a1.55,1.55,0,0,0-1.54-1.27,1.58,1.58,0,0,0-1.58,1.57,1.48,1.48,0,0,0,0,.31h0L1.5,22.5V14.1L8,7a1.52,1.52,0,0,0,1.37.81,1.57,1.57,0,0,0,.64-3l3-3.29h1a8.37,8.37,0,0,1,8.4,8.4Z"/>
                    </svg>
                    <span>Frios e Laticínios</span>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-neutral-muted">Queijos, presuntos, embutidos e iogurtes.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Section: Sobre (Detailed Narrative) */}
        <div id="sobre" className="mt-24 sm:mt-32 border-t border-neutral-border pt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start scroll-mt-24">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl font-black tracking-tight text-neutral-ink sm:text-4xl lg:text-5xl leading-tight">
              Qualidade e tradição perto de você
            </h2>
            <p className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-orange">
              Supermercado Vip 10
            </p>
          </div>
          <div className="lg:col-span-8 text-neutral-muted text-lg sm:text-xl leading-relaxed space-y-6 font-medium">
            <p>
              Do essencial do dia a dia, como pão quentinho e leite fresco, até carnes nobres para aquele churrasco de final de semana, nosso mercado é a parada obrigatória de quem valoriza qualidade e preço justo.
            </p>

            {/* Group Promo Block */}
            <div className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-orange text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-base font-extrabold text-neutral-ink mb-1">Grupo VIP — Ofertas Exclusivas Todo Dia</p>
                <p className="text-sm text-neutral-muted leading-relaxed">
                  Entre no nosso grupo e receba <span className="font-bold text-neutral-ink">ofertas diárias, promoções relâmpago e preços que você não vai encontrar em outro lugar.</span> É grátis e você sai quando quiser.
                </p>
              </div>
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-brand-orange px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-orange-hover hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange active:scale-95"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.457 5.709 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
                Entrar no Grupo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
