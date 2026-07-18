import { useEffect, useState } from 'react';

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setShouldRender(true);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-ink transition-all duration-700 ease-in-out ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Container for sliding cart */}
      <div className="relative w-80 overflow-hidden py-12 flex flex-col items-center justify-center">
        {/* Cart Slider wrapper */}
        <div className="animate-cart-roll flex flex-col items-center">
          <svg
            className="h-20 w-20 text-brand-orange"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Falling Apple Group (relative layout inside SVG) */}
            <g className="animate-item-fall origin-[14px_10px]">
              {/* Apple body (Red for maximum contrast with orange basket) */}
              <circle cx="14" cy="10" r="2.5" fill="#EF4444" stroke="#EF4444" />
              {/* Apple leaf/stem */}
              <path d="M14 7.5c0.5-0.8 1.5-0.8 2-0.5" stroke="#10B981" strokeWidth="0.8" fill="none" />
            </g>

            {/* Basket path */}
            <path d="M2 2h3l2.68 12.43a2 2 0 002 1.57h9.72a2 2 0 002-1.57L23 6H6" />
            
            {/* Wheel 1 (Grouped for rotation - Bold spokes) */}
            <g className="animate-wheel-roll origin-[9.5px_20.5px] text-white">
              <circle cx="9.5" cy="20.5" r="2" fill="currentColor" stroke="none" />
              <line x1="9.5" y1="18.5" x2="9.5" y2="22.5" stroke="#111827" strokeWidth="0.8" />
              <line x1="7.5" y1="20.5" x2="11.5" y2="20.5" stroke="#111827" strokeWidth="0.8" />
            </g>
            
            {/* Wheel 2 (Grouped for rotation - Bold spokes) */}
            <g className="animate-wheel-roll origin-[19.5px_20.5px] text-white">
              <circle cx="19.5" cy="20.5" r="2" fill="currentColor" stroke="none" />
              <line x1="19.5" y1="18.5" x2="19.5" y2="22.5" stroke="#111827" strokeWidth="0.8" />
              <line x1="17.5" y1="20.5" x2="21.5" y2="20.5" stroke="#111827" strokeWidth="0.8" />
            </g>
          </svg>
        </div>

        {/* Floor Line - shifted slightly less to let the cart sit a tiny bit higher */}
        <div className="w-80 h-1.5 bg-white/10 rounded-full -mt-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-orange/30 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
