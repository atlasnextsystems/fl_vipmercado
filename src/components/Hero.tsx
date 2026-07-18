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
              Desde 2012 em Salto e Região
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight text-neutral-ink sm:text-6xl lg:text-7xl leading-tight">
              Incrível supermercado na cidade de <span className="text-brand-orange">Salto</span>
            </h1>
            <p className="mt-5 text-lg text-neutral-muted sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Se você busca qualidade, itens frescos e variedade de marcas populares e própria para a sua compra diária ou semanal, o Supermercado Vip é o seu lugar certo.
            </p>

            {/* CTA Actions */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Avenida+Anita+Garibaldi+240,+Salto,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-7 py-3.5 text-base sm:text-lg font-bold text-white shadow-sm transition-all hover:bg-brand-orange-hover hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange animate-cta-pulse"
              >
                Venha Aqui
              </a>
              <a
                href="https://wa.me/5511971672012?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-border bg-neutral-bg-soft px-7 py-3.5 text-base sm:text-lg font-bold text-neutral-ink transition-all hover:bg-neutral-border/10 focus-visible:outline-2 focus-visible:outline-brand-orange"
              >
                Fale Conosco
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

              {/* Card 2 - Açougue */}
              <div className="group overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-xs transition-all hover:shadow-md sm:col-span-1 lg:col-span-1">
                <div className="aspect-3/2 overflow-hidden bg-neutral-bg-soft">
                  <img
                    src="/acougue.jpg"
                    alt="Carnes frescas"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 font-display text-base font-extrabold text-neutral-ink">
                    <svg className="h-5 w-5 text-rose-600 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.7744 5.6944C16.7363 5.60548 16.6966 5.55984 16.5688 5.4321C16.2759 5.13921 15.8011 5.13921 15.5082 5.4321C15.2153 5.72499 15.2153 6.19987 15.5082 6.49276L16.0385 7.02309L14.3937 8.66785C14.6008 8.80477 14.7964 8.96297 14.9778 9.14441C15.1593 9.32586 15.3175 9.52145 15.4544 9.72851L17.0992 8.08375L17.6295 8.61408C17.9224 8.90698 18.3973 8.90698 18.6901 8.61408C18.983 8.32119 18.983 7.84632 18.6901 7.55342C18.5624 7.42569 18.5168 7.38595 18.4278 7.34785C18.3239 7.30328 18.1044 7.24276 17.6295 7.24276H16.8795V6.49276C16.8795 6.01789 16.819 5.79839 16.7744 5.6944ZM16.0704 11.2338C16.2803 12.2047 16.2235 13.2635 16.0238 14.2423C15.6574 16.0382 14.7598 17.8477 13.6761 18.9314C11.4331 21.1744 7.74093 20.9994 5.43189 18.6904C3.12284 16.3813 2.94784 12.6891 5.19083 10.4461C6.2745 9.36246 8.084 8.46482 9.87993 8.09842C10.8588 7.89872 11.9175 7.84191 12.8885 8.0518L14.0077 6.93256C13.6082 6.09622 13.7548 5.06417 14.4475 4.37144C15.3262 3.49276 16.7508 3.49276 17.6295 4.37144C17.633 4.37498 17.6366 4.37857 17.6403 4.38222C17.7785 4.52028 17.9965 4.73805 18.1531 5.10352C18.2384 5.30253 18.2986 5.52701 18.3353 5.78692C18.5952 5.82368 18.8197 5.88384 19.0187 5.96913C19.3842 6.12576 19.602 6.34377 19.74 6.48198C19.7437 6.48563 19.7473 6.48922 19.7508 6.49276C20.6295 7.37144 20.6295 8.79606 19.7508 9.67474C19.0581 10.3675 18.026 10.5141 17.1897 10.1145L16.0704 11.2338ZM10.1798 9.56815C8.60741 9.88893 7.08494 10.6733 6.25149 11.5068C4.66024 13.098 4.70109 15.8382 6.49255 17.6297C8.28401 19.4212 11.0242 19.462 12.6155 17.8708C13.4489 17.0373 14.2333 15.5148 14.5541 13.9425C14.8806 12.3422 14.6783 10.9662 13.9172 10.2051C13.156 9.4439 11.7801 9.24167 10.1798 9.56815Z" />
                    </svg>
                    <span>Açougue</span>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-neutral-muted">Cortes especiais e carnes selecionadas para churrasco.</p>
                </div>
              </div>

              {/* Card 3 - Padaria */}
              <div className="group overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-xs transition-all hover:shadow-md sm:col-span-1 lg:col-span-2">
                <div className="aspect-3/2 lg:aspect-21/9 overflow-hidden bg-neutral-bg-soft">
                  <img
                    src="/padaria.jpg"
                    alt="Pães fresquinhos"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 font-display text-base font-extrabold text-neutral-ink">
                    <svg className="h-5 w-5 text-amber-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.46530832,20.534679 L15.2109027,8.78899174 M8.90748885,9.23119339 C10.5260377,10.4451155 10.8540525,12.741287 9.64013033,14.3598359 C9.48392783,14.5681041 9.3061194,14.7589289 9.10982697,14.9291885 L8.90748885,15.0924774 C7.28893997,13.8785552 6.96092521,11.5823837 8.17484736,9.96383487 C8.33104986,9.75556668 8.5088583,9.56474181 8.70515072,9.39448224 L8.90748885,9.23119339 Z M11.8381055,6.30055141 C13.4566544,7.51447356 13.7846691,9.81064501 12.570747,11.4291939 C12.4145445,11.6374621 12.236736,11.8282869 12.0404436,11.9985465 L11.8381055,12.1618354 C10.2195566,10.9479132 9.89154184,8.65174177 11.105464,7.03319289 C11.2616665,6.82492469 11.4394749,6.63409983 11.6357674,6.46384026 L11.8381055,6.30055141 Z M14.7687221,3.36990942 C16.387271,4.58383158 16.7152858,6.88000303 15.5013636,8.4985519 C15.3451611,8.7068201 15.1673527,8.89764496 14.9710602,9.06790454 L14.7687221,9.23119339 C13.1501732,8.01727123 12.8221585,5.72109978 14.0360806,4.10255091 C14.1922831,3.89428271 14.3700916,3.70345785 14.566384,3.53319827 L14.7687221,3.36990942 Z M20.6299554,9.23119339 C19.4160647,10.8497283 17.1199302,11.1777572 15.5013953,9.96386656 C15.2931167,9.80765894 15.102283,9.62984306 14.9320168,9.43354137 L14.7687221,9.23119339 C15.9826128,7.61265851 18.2787473,7.28462956 19.8972822,8.49852022 C20.1055608,8.65472784 20.2963945,8.83254372 20.4666607,9.02884541 L20.6299554,9.23119339 Z M17.6993388,12.1618354 C16.4854481,13.7803702 14.1893135,14.1083992 12.5707787,12.8945085 C12.3625,12.7383009 12.1716664,12.560485 12.0014002,12.3641834 L11.8381055,12.1618354 C13.0519961,10.5433005 15.3481307,10.2152715 16.9666656,11.4291622 C17.1749442,11.5853698 17.3657778,11.7631857 17.536044,11.9594874 L17.6993388,12.1618354 Z M14.7687221,15.0924774 C13.5548315,16.7110122 11.2586969,17.0390412 9.64016202,15.8251505 C9.43188339,15.6689429 9.24104976,15.491127 9.07078357,15.2948253 L8.90748885,15.0924774 C10.1213795,13.4739425 12.4175141,13.1459135 14.036049,14.3598042 C14.2443276,14.5160118 14.4351612,14.6938277 14.6054274,14.8901294 L14.7687221,15.0924774 Z M5.90748885,12.2311934 C7.52603772,13.4451155 7.85405249,15.741287 6.64013033,17.3598359 C6.48392783,17.5681041 6.3061194,17.7589289 6.10982697,17.9291885 L5.90748885,18.0924774 C4.28893997,16.8785552 3.96092521,14.5823837 5.17484736,12.9638349 C5.33104986,12.7555667 5.5088583,12.5647418 5.70515072,12.3944822 L5.90748885,12.2311934 Z M11.7687221,18.0924774 C10.5548315,19.7110122 8.25869689,20.0390412 6.64016202,18.8251505 C6.43188339,18.6689429 6.24104976,18.491127 6.07078357,18.2948253 L5.90748885,18.0924774 C7.12137951,16.4739425 9.41751408,16.1459135 11.036049,17.3598042 C11.2443276,17.5160118 11.4351612,17.6938277 11.6054274,17.8901294 L11.7687221,18.0924774 Z M20.7375506,3.26301485 C21.0236732,5.26589042 19.6319978,7.12145287 17.6291624,7.40756974 C17.3714382,7.44438685 17.1107705,7.45359128 16.8515745,7.4351821 L16.593027,7.40752834 C16.3069102,5.40469292 17.6985855,3.54913047 19.7014209,3.26301359 C20.0450532,3.2139237 20.3939185,3.21392412 20.7375506,3.26301485 Z" />
                    </svg>
                    <span>Padaria</span>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-neutral-muted">Pães artesanais, bolos e salgados assados no dia.</p>
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
            <p>
              Se você quer checar a disponibilidade de um produto específico ou tirar alguma dúvida, ligue ou nos envie uma mensagem no WhatsApp pelo número <a href="tel:+5511971672012" className="text-brand-orange font-black hover:underline hover:text-brand-orange-hover">(11) 97167-2012</a>. Nossa equipe está sempre pronta para garantir a melhor experiência de compra!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
