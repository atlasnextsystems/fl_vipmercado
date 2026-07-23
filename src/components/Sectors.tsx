export default function Sectors() {
  const sectors = [
    {
      icon: (
        <svg className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19a7 7 0 007-7c0-4-3-8-7-10-4 2-7 6-7 10a7 7 0 007 7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v10" />
        </svg>
      ),
      title: 'Hortifrúti',
      desc: 'Frutas, legumes e verduras selecionados um a um, com entregas diárias de produtores locais.',
      items: ['Frutas da estação', 'Legumes higienizados', 'Verduras frescas']
    },
    {
      icon: (
        <svg className="h-6 w-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'Mercearia',
      desc: 'Variedade completa de marcas líderes e itens essenciais para encher a despensa da sua casa.',
      items: ['Arroz, feijão e óleos', 'Massas e molhos', 'Enlatados e condimentos']
    },
    {
      icon: (
        <svg className="h-6 w-6 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="1.91" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.09,14.86a1.9,1.9,0,0,1-1.9-1.79.49.49,0,0,1,0-.12,1.91,1.91,0,0,1,3.71-.62A1.84,1.84,0,0,1,12,13,1.9,1.9,0,0,1,10.09,14.86Z"/>
          <path d="M22.5,9.9v8.4L10.89,20.62a1.55,1.55,0,0,0-1.54-1.27,1.58,1.58,0,0,0-1.58,1.57,1.48,1.48,0,0,0,0,.31h0L1.5,22.5V14.1L8,7a1.52,1.52,0,0,0,1.37.81,1.57,1.57,0,0,0,.64-3l3-3.29h1a8.37,8.37,0,0,1,8.4,8.4Z"/>
          <path d="M17.82,19.24h0a1.86,1.86,0,0,0,.84-1.55,1.91,1.91,0,0,0-3.82,0,1.87,1.87,0,0,0,1.58,1.83"/>
          <circle cx="18.2" cy="4.84" r="1.91"/>
          <line x1="22.5" y1="9.14" x2="11.69" y2="11.59"/>
          <line x1="8.88" y1="12.23" x2="1.5" y2="13.91"/>
        </svg>
      ),
      title: 'Frios e Laticínios',
      desc: 'Queijos variados, presuntos, embutidos, iogurtes e manteigas das melhores marcas do mercado.',
      items: ['Queijos fatiados e inteiros', 'Presunto e peito de peru', 'Laticínios e iogurtes']
    },
    {
      icon: (
        <svg className="h-6 w-6 text-brand-orange" fill="currentColor" viewBox="-19.96 0 55.118 55.118" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(-577.289 -319.387)">
            <path d="M584.883,374.505c-3.781,0-7.594-.96-7.594-3.1v-17.53c0-2.642,1.093-6.864,2.149-10.947.984-3.8,2-7.734,2-9.925v-9.79a1,1,0,0,1,2,0V333c0,2.445-1,6.321-2.064,10.426-1.025,3.962-2.086,8.058-2.086,10.446v17.448c.31.377,2.218,1.186,5.594,1.186s5.284-.809,5.594-1.186V353.871c0-2.388-1.061-6.484-2.086-10.446-1.062-4.1-2.065-7.981-2.065-10.426v-9.79a1,1,0,0,1,2,0V333c0,2.191,1.018,6.122,2,9.925,1.057,4.083,2.15,8.3,2.15,10.947V371.4C592.477,373.545,588.663,374.505,584.883,374.505Z" />
            <path d="M581.531,365.72a1.006,1.006,0,0,1-.188-.018c-3.35-.638-4.053-1.871-4.053-2.792a1,1,0,0,1,2-.09,4.862,4.862,0,0,0,2.432.917,1,1,0,0,1-.187,1.983Z" />
            <path d="M588.239,365.72a1,1,0,0,1-.186-1.983,4.851,4.851,0,0,0,2.431-.917,1,1,0,0,1,2,.09c0,.921-.7,2.153-4.052,2.792A1.016,1.016,0,0,1,588.239,365.72Z" />
            <path d="M584.883,367.075a4.575,4.575,0,1,1,4.575-4.575A4.58,4.58,0,0,1,584.883,367.075Zm0-7.15a2.575,2.575,0,1,0,2.575,2.575A2.578,2.578,0,0,0,584.883,359.925Z" />
            <path d="M584.894,324.406c-2.423,0-4.182-1.055-4.182-2.509s1.759-2.51,4.182-2.51,4.184,1.055,4.184,2.51S587.318,324.406,584.894,324.406Zm-2.1-2.509a4.605,4.605,0,0,0,4.209,0,4.6,4.6,0,0,0-4.209,0Z" />
            <path d="M584.89,327.41a6.048,6.048,0,0,1-2.934-.671,1,1,0,0,1,.988-1.738,5.123,5.123,0,0,0,3.892,0,1,1,0,0,1,.988,1.738A6.048,6.048,0,0,1,584.89,327.41Z" />
          </g>
        </svg>
      ),
      title: 'Bebidas',
      desc: 'Cervejas trincando de geladas, refrigerantes, sucos, vinhos selecionados e destilados.',
      items: ['Refrigerantes e sucos', 'Cervejas artesanais', 'Adega de vinhos']
    },
    {
      icon: (
        <svg className="h-7 w-7 text-brand-orange" fill="currentColor" viewBox="-6.4 -12.8 140.8 172.8" xmlns="http://www.w3.org/2000/svg">
          <path d="m90.82,17.68h-53.64c-13.44,0-24.38,15.31-24.38,34.13v56.07c0,.97.58,1.85,1.47,2.24.89.39,1.93.2,2.64-.46l5.04-4.76,5.04,4.76c.94.89,2.41.89,3.35,0l5.03-4.75,5.03,4.75c.94.89,2.41.89,3.35,0l5.02-4.75,5.02,4.75c.94.89,2.41.89,3.35,0l5.03-4.75,5.03,4.75c.46.44,1.06.67,1.68.67.33,0,.65-.06.96-.2.9-.38,1.47-1.26,1.47-2.24v-21.94h19.5c13.44,0,24.38-15.31,24.38-34.13s-10.94-34.13-24.38-34.13Zm-24.38,84.54l-2.59-2.45c-.94-.89-2.41-.89-3.35,0l-5.03,4.75-5.02-4.75c-.94-.89-2.41-.89-3.35,0l-5.03,4.75-5.03-4.75c-.94-.89-2.41-.89-3.35,0l-5.03,4.75-5.04-4.76c-.47-.44-1.07-.66-1.67-.66s-1.2.22-1.67.66l-2.6,2.46v-50.42c0-16.13,8.75-29.26,19.5-29.26h41.04c-.33.28-.63.6-.95.9-.05.04-.09.09-.14.13-2.44,2.31-4.6,5.2-6.32,8.66-1.88,3.79-3.17,8.02-3.84,12.48-.03.2-.05.4-.08.6-.11.83-.2,1.66-.27,2.51-.02.27-.05.54-.07.81-.07,1.05-.11,2.11-.11,3.17v50.41Zm4.88-21.16v-8.86c1.9,3.56,4.28,6.57,7.01,8.86h-7.01Zm19.5,0c-10.75,0-19.5-13.12-19.5-29.26,0-1.41.09-2.8.22-4.18.03-.29.05-.58.09-.86.16-1.36.37-2.71.66-4.02.02-.1.05-.19.07-.29.65-2.85,1.59-5.56,2.83-8.05,2.74-5.52,6.68-9.38,11.02-11,.06-.02.12-.05.19-.07.62-.22,1.26-.39,1.9-.51.11-.02.22-.06.34-.08.73-.13,1.46-.2,2.19-.2,10.75,0,19.5,13.12,19.5,29.26s-8.75,29.26-19.5,29.26Z"/>
          <path d="m90.82,39.62c-5.38,0-9.75,5.47-9.75,12.19s4.37,12.19,9.75,12.19,9.75-5.47,9.75-12.19-4.37-12.19-9.75-12.19Zm0,19.5c-2.64,0-4.88-3.35-4.88-7.31s2.23-7.31,4.88-7.31,4.88,3.35,4.88,7.31-2.23,7.31-4.88,7.31Z"/>
        </svg>
      ),
      title: 'Limpeza e Higiene',
      desc: 'Tudo o que sua casa precisa para ficar limpa e produtos de higiene pessoal de alta qualidade.',
      items: ['Produtos de limpeza', 'Sabão e amaciante', 'Higiene e cuidados']
    }
  ];

  return (
    <section id="setores" className="bg-neutral-bg-soft py-20 sm:py-24 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <h2 className="font-display text-4xl font-black tracking-tight text-neutral-ink sm:text-5xl">
            Tudo o que você precisa em um só lugar
          </h2>
          <p className="mt-5 text-lg text-neutral-muted sm:text-xl font-medium">
            Nossos setores são abastecidos diariamente para garantir a máxima qualidade em cada item do seu carrinho de compras.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {sectors.map((sector) => (
            <div 
              key={sector.title}
              className="group flex flex-col justify-between rounded-2xl border border-neutral-border bg-white p-7 shadow-xs transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-brand-orange/20"
            >
              <div>
                {/* Icon Container */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/5 text-brand-orange mb-5 group-hover:bg-brand-orange/10 transition-colors">
                  {sector.icon}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-neutral-ink mb-3 leading-snug">
                  {sector.title}
                </h3>
                
                <p className="text-base text-neutral-muted leading-relaxed font-medium">
                  {sector.desc}
                </p>
              </div>

              {/* Items List */}
              <ul className="mt-8 space-y-2.5 border-t border-neutral-border pt-5 text-sm font-semibold text-neutral-muted">
                {sector.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-orange"></span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
