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
        <svg className="h-6 w-6 text-brand-orange" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.7744 5.6944C16.7363 5.60548 16.6966 5.55984 16.5688 5.4321C16.2759 5.13921 15.8011 5.13921 15.5082 5.4321C15.2153 5.72499 15.2153 6.19987 15.5082 6.49276L16.0385 7.02309L14.3937 8.66785C14.6008 8.80477 14.7964 8.96297 14.9778 9.14441C15.1593 9.32586 15.3175 9.52145 15.4544 9.72851L17.0992 8.08375L17.6295 8.61408C17.9224 8.90698 18.3973 8.90698 18.6901 8.61408C18.983 8.32119 18.983 7.84632 18.6901 7.55342C18.5624 7.42569 18.5168 7.38595 18.4278 7.34785C18.3239 7.30328 18.1044 7.24276 17.6295 7.24276H16.8795V6.49276C16.8795 6.01789 16.819 5.79839 16.7744 5.6944ZM16.0704 11.2338C16.2803 12.2047 16.2235 13.2635 16.0238 14.2423C15.6574 16.0382 14.7598 17.8477 13.6761 18.9314C11.4331 21.1744 7.74093 20.9994 5.43189 18.6904C3.12284 16.3813 2.94784 12.6891 5.19083 10.4461C6.2745 9.36246 8.084 8.46482 9.87993 8.09842C10.8588 7.89872 11.9175 7.84191 12.8885 8.0518L14.0077 6.93256C13.6082 6.09622 13.7548 5.06417 14.4475 4.37144C15.3262 3.49276 16.7508 3.49276 17.6295 4.37144C17.633 4.37498 17.6366 4.37857 17.6403 4.38222C17.7785 4.52028 17.9965 4.73805 18.1531 5.10352C18.2384 5.30253 18.2986 5.52701 18.3353 5.78692C18.5952 5.82368 18.8197 5.88384 19.0187 5.96913C19.3842 6.12576 19.602 6.34377 19.74 6.48198C19.7437 6.48563 19.7473 6.48922 19.7508 6.49276C20.6295 7.37144 20.6295 8.79606 19.7508 9.67474C19.0581 10.3675 18.026 10.5141 17.1897 10.1145L16.0704 11.2338ZM10.1798 9.56815C8.60741 9.88893 7.08494 10.6733 6.25149 11.5068C4.66024 13.098 4.70109 15.8382 6.49255 17.6297C8.28401 19.4212 11.0242 19.462 12.6155 17.8708C13.4489 17.0373 14.2333 15.5148 14.5541 13.9425C14.8806 12.3422 14.6783 10.9662 13.9172 10.2051C13.156 9.4439 11.7801 9.24167 10.1798 9.56815Z" />
        </svg>
      ),
      title: 'Açougue',
      desc: 'Cortes nobres e carnes frescas para o dia a dia ou churrasco. Atendimento e moagem na hora.',
      items: ['Cortes bovinos nobres', 'Suínos e aves', 'Carnes para churrasco']
    },
    {
      icon: (
        <svg className="h-6 w-6 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.46530832,20.534679 L15.2109027,8.78899174 M8.90748885,9.23119339 C10.5260377,10.4451155 10.8540525,12.741287 9.64013033,14.3598359 C9.48392783,14.5681041 9.3061194,14.7589289 9.10982697,14.9291885 L8.90748885,15.0924774 C7.28893997,13.8785552 6.96092521,11.5823837 8.17484736,9.96383487 C8.33104986,9.75556668 8.5088583,9.56474181 8.70515072,9.39448224 L8.90748885,9.23119339 Z M11.8381055,6.30055141 C13.4566544,7.51447356 13.7846691,9.81064501 12.570747,11.4291939 C12.4145445,11.6374621 12.236736,11.8282869 12.0404436,11.9985465 L11.8381055,12.1618354 C10.2195566,10.9479132 9.89154184,8.65174177 11.105464,7.03319289 C11.2616665,6.82492469 11.4394749,6.63409983 11.6357674,6.46384026 L11.8381055,6.30055141 Z M14.7687221,3.36990942 C16.387271,4.58383158 16.7152858,6.88000303 15.5013636,8.4985519 C15.3451611,8.7068201 15.1673527,8.89764496 14.9710602,9.06790454 L14.7687221,9.23119339 C13.1501732,8.01727123 12.8221585,5.72109978 14.0360806,4.10255091 C14.1922831,3.89428271 14.3700916,3.70345785 14.566384,3.53319827 L14.7687221,3.36990942 Z M20.6299554,9.23119339 C19.4160647,10.8497283 17.1199302,11.1777572 15.5013953,9.96386656 C15.2931167,9.80765894 15.102283,9.62984306 14.9320168,9.43354137 L14.7687221,9.23119339 C15.9826128,7.61265851 18.2787473,7.28462956 19.8972822,8.49852022 C20.1055608,8.65472784 20.2963945,8.83254372 20.4666607,9.02884541 L20.6299554,9.23119339 Z M17.6993388,12.1618354 C16.4854481,13.7803702 14.1893135,14.1083992 12.5707787,12.8945085 C12.3625,12.7383009 12.1716664,12.560485 12.0014002,12.3641834 L11.8381055,12.1618354 C13.0519961,10.5433005 15.3481307,10.2152715 16.9666656,11.4291622 C17.1749442,11.5853698 17.3657778,11.7631857 17.536044,11.9594874 L17.6993388,12.1618354 Z M14.7687221,15.0924774 C13.5548315,16.7110122 11.2586969,17.0390412 9.64016202,15.8251505 C9.43188339,15.6689429 9.24104976,15.491127 9.07078357,15.2948253 L8.90748885,15.0924774 C10.1213795,13.4739425 12.4175141,13.1459135 14.036049,14.3598042 C14.2443276,14.5160118 14.4351612,14.6938277 14.6054274,14.8901294 L14.7687221,15.0924774 Z M5.90748885,12.2311934 C7.52603772,13.4451155 7.85405249,15.741287 6.64013033,17.3598359 C6.48392783,17.5681041 6.3061194,17.7589289 6.10982697,17.9291885 L5.90748885,18.0924774 C4.28893997,16.8785552 3.96092521,14.5823837 5.17484736,12.9638349 C5.33104986,12.7555667 5.5088583,12.5647418 5.70515072,12.3944822 L5.90748885,12.2311934 Z M11.7687221,18.0924774 C10.5548315,19.7110122 8.25869689,20.0390412 6.64016202,18.8251505 C6.43188339,18.6689429 6.24104976,18.491127 6.07078357,18.2948253 L5.90748885,18.0924774 C7.12137951,16.4739425 9.41751408,16.1459135 11.036049,17.3598042 C11.2443276,17.5160118 11.4351612,17.6938277 11.6054274,17.8901294 L11.7687221,18.0924774 Z M20.7375506,3.26301485 C21.0236732,5.26589042 19.6319978,7.12145287 17.6291624,7.40756974 C17.3714382,7.44438685 17.1107705,7.45359128 16.8515745,7.4351821 L16.593027,7.40752834 C16.3069102,5.40469292 17.6985855,3.54913047 19.7014209,3.26301359 C20.0450532,3.2139237 20.3939185,3.21392412 20.7375506,3.26301485 Z" />
        </svg>
      ),
      title: 'Padaria',
      desc: 'Pães artesanais quentinhos a toda hora, bolos caseiros, salgados e doces de fabricação própria.',
      items: ['Pão francês quentinho', 'Bolos confeitados', 'Salgados assados']
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
            <path d="M581.661,360.96a.984.984,0,0,1-.178-.016c-2.7-.485-4.193-1.488-4.193-2.824a1,1,0,0,1,2-.086,5.134,5.134,0,0,0,2.551.942,1,1,0,0,1-.176,1.984Z" />
            <path d="M588.1,360.95a1,1,0,0,1-.17-1.985,5.107,5.107,0,0,0,2.555-.932,1,1,0,0,1,2,.087c0,1.345-1.495,2.345-4.21,2.815A1,1,0,0,1,588.1,360.95Z" />
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
    },
    {
      icon: (
        <svg className="h-6 w-6 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v2M8 3a4 4 0 0 1 8 0M3 21h18M4 17a8 8 0 0 1 16 0H4z" />
          <path d="M12 11h.01M9 14h.01M15 14h.01" />
        </svg>
      ),
      title: 'Rotisseria e Pratos Prontos',
      desc: 'Refeições completas, massas frescas, assados especiais de domingo e guarnições práticas feitas todos os dias.',
      items: ['Frango assado aos domingos', 'Massas e lasanhas frescas', 'Acompanhamentos diversos']
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
