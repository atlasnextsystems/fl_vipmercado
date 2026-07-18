export default function Testimonials() {
  const reviews = [
    {
      name: 'Carlos Alberto',
      rating: 5,
      text: 'Melhor açougue de Salto! O atendimento é excelente, as carnes são sempre muito frescas e de alta qualidade. Recomendo para quem quer um atendimento de primeira.'
    },
    {
      name: 'Mariana Souza',
      rating: 5,
      text: 'Faço minhas compras semanais no Vip 10. O hortifrúti é super fresco e a padaria tem o melhor pão francês da região. O ambiente é sempre limpo e climatizado.'
    },
    {
      name: 'Fernando Lima',
      rating: 5,
      text: 'Atendimento muito ágil e humano! Costumo mandar mensagem pelo WhatsApp para checar a disponibilidade de itens de última hora ou reservar carnes e sou sempre atendido rapidamente.'
    }
  ];

  return (
    <section id="depoimentos" className="bg-neutral-bg-soft py-20 sm:py-24 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header and Rating Summary Block */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange mb-2 block">
            Quem compra, aprova
          </span>
          <h2 className="font-display text-4xl font-black tracking-tight text-neutral-ink sm:text-5xl leading-tight">
            O que dizem nossos clientes
          </h2>

          {/* Trustpilot-style Google Reviews badge */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-base font-semibold text-neutral-ink">
              Nota 4.5/5.0 baseada em <span className="underline decoration-brand-orange text-brand-orange">552 avaliações reais</span> no Google Reviews.
            </p>
          </div>
        </div>

        {/* Mobile-first stack, desktop 3-column layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col justify-between rounded-2xl border border-neutral-border bg-white p-7 shadow-xs relative"
            >
              {/* Quote bubble decor */}
              <span className="absolute top-4 right-6 text-neutral-border/20 font-serif text-7xl leading-none select-none pointer-events-none">“</span>

              <div className="relative z-10">
                {/* Rating stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>

                <p className="text-base sm:text-lg text-neutral-muted leading-relaxed italic font-medium">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer info */}
              <div className="mt-8 border-t border-neutral-border pt-5 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-brand-orange/5 flex items-center justify-center font-bold text-brand-orange text-base">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-neutral-ink">{review.name}</h4>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
