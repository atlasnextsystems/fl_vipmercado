import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  // Show the floating button after a 1-second delay on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Show tooltip after a delay once the button becomes visible
  useEffect(() => {
    if (isVisible && !tooltipDismissed) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 2500); // 2.5s delay after button becomes visible

      return () => clearTimeout(timer);
    }
  }, [isVisible, tooltipDismissed]);

  // Hide tooltip when user scrolls after it's shown
  useEffect(() => {
    if (showTooltip) {
      const handleScrollHide = () => {
        setShowTooltip(false);
        setTooltipDismissed(true);
      };

      window.addEventListener('scroll', handleScrollHide, { passive: true });
      return () => window.removeEventListener('scroll', handleScrollHide);
    }
  }, [showTooltip]);

  const handleDismissTooltip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    setTooltipDismissed(true);
  };

  const handleButtonClick = () => {
    setShowTooltip(false);
    setTooltipDismissed(true);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
    >
      {/* Tooltip Chat Bubble */}
      <div
        role="tooltip"
        id="whatsapp-tooltip"
        onMouseEnter={() => setShowTooltip(false)} // Dismiss on hover
        className={`absolute bottom-full right-0 mb-4 w-60 rounded-2xl bg-white p-3.5 shadow-xl border border-neutral-border text-left transition-all duration-300 origin-bottom-right ${showTooltip ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'
          }`}
      >
        {/* Tooltip Close Button */}
        <button
          onClick={handleDismissTooltip}
          className="absolute top-2 right-2 rounded-lg p-0.5 text-neutral-muted hover:bg-neutral-bg-soft hover:text-neutral-ink focus-visible:outline-2 focus-visible:outline-brand-orange"
          aria-label="Fechar mensagem"
        >
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Message Content */}
        <div className="pr-4">
          <p className="text-xs font-bold text-emerald-600 mb-0.5">Atendimento VIP</p>
          <p className="text-xs text-neutral-ink font-medium leading-relaxed">
            Dúvidas sobre produtos ou funcionamento? Fale conosco!
          </p>
        </div>

        {/* Tooltip Pointer (Tailwind v4 border triangle) */}
        <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-r border-b border-neutral-border bg-white"></div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511971672012?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20um%20produto."
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleButtonClick}
        aria-describedby="whatsapp-tooltip"
        aria-label="Fale conosco no WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-emerald-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 active:scale-95 z-10"
      >
        {/* Continuous Radar Pulse Glow effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 opacity-75 animate-ping z-0 group-hover:animate-none"></span>

        {/* Icon */}
        <svg
          className="relative z-10 h-7 w-7 fill-current transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.457 5.709 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
        </svg>
      </a>
    </div>
  );
}
