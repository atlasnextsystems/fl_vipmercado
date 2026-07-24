export default function Videos() {
  const videos = [
    {
      title: 'Conheça nosso mercado',
      embedId: 'dQw4w9WgXcQ',
      desc: 'Um passeio pelos nossos corredores e setores.'
    },
    {
      title: 'Ofertas da semana',
      embedId: 'dQw4w9WgXcQ',
      desc: 'Confira as melhores promoções desta semana.'
    },
    {
      title: 'Hortifrúti fresquinho',
      embedId: 'dQw4w9WgXcQ',
      desc: 'Veja como selecionamos nossas frutas e vegetais.'
    },
    {
      title: 'Receitas fáceis',
      embedId: 'dQw4w9WgXcQ',
      desc: 'Receitas rápidas com produtos do nosso mercado.'
    },
    {
      title: 'Promoções relâmpago',
      embedId: 'dQw4w9WgXcQ',
      desc: 'Ofertas exclusivas que duram pouco tempo.'
    },
    {
      title: 'Dicas de compras',
      embedId: 'dQw4w9WgXcQ',
      desc: 'Aprenda a economizar nas suas compras do mês.'
    }
  ];

  return (
    <section id="videos" className="bg-white py-20 sm:py-24 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange mb-2 block">
            Vídeos
          </span>
          <h2 className="font-display text-4xl font-black tracking-tight text-neutral-ink sm:text-5xl">
            Veja nosso mercado em ação
          </h2>
          <p className="mt-5 text-lg text-neutral-muted sm:text-xl font-medium">
            Conheça nossos setores, promoções e a experiência de comprar no VIP 10.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div 
              key={video.title}
              className="group rounded-2xl border border-neutral-border bg-neutral-bg-soft overflow-hidden shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-orange/20"
            >
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg sm:text-xl font-bold text-neutral-ink mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-neutral-muted leading-relaxed font-medium">
                  {video.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
