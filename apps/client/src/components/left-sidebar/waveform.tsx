import { cn } from '@/lib/utils';
import { memo } from 'react';

type TIndicatorProps = {
  className?: string;
  isScreenSharing?: boolean;
};

const Waveform = memo(({ className, isScreenSharing }: TIndicatorProps) => {
  if (isScreenSharing) {
    return (
      <div
        className={cn(
          'flex items-center justify-center h-4 w-6 animate-in zoom-in-75 duration-300 text-blue-500',
          className
        )}
      >
        <svg
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M2 8C2 8 5.63636 2 12 2C18.3636 2 22 8 22 8C22 8 18.3636 14 12 14C5.63636 14 2 8 2 8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            className="animate-eye-blink"
            cx="12"
            cy="8"
            r="3"
            fill="currentColor"
          />
        </svg>
        <style>{`
          @keyframes eye-blink {
            0%, 90%, 100% { transform: scale(1); opacity: 1; }
            95% { transform: scale(0.1); opacity: 0.5; }
          }
          .animate-eye-blink {
            transform-origin: center;
            animation: eye-blink 4s infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center h-4 w-6 animate-in fade-in duration-700 text-green-500',
        className
      )}
    >
      <svg
        viewBox="0 0 23 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        style={{ shapeRendering: 'geometricPrecision' }}
      >
        <rect
          className="animate-wf-loop"
          rx="1.5"
          fill="currentColor"
          width="3"
          style={{ '--max-h': 8, '--delay': '0.0s' } as React.CSSProperties}
        />
        <rect
          className="animate-wf-loop"
          rx="1.5"
          fill="currentColor"
          width="3"
          x="5"
          style={{ '--max-h': 13, '--delay': '0.2s' } as React.CSSProperties}
        />
        <rect
          className="animate-wf-loop"
          rx="1.5"
          fill="currentColor"
          width="3"
          x="10"
          style={{ '--max-h': 10, '--delay': '0.4s' } as React.CSSProperties}
        />
        <rect
          className="animate-wf-loop"
          rx="1.5"
          fill="currentColor"
          width="3"
          x="15"
          style={{ '--max-h': 16, '--delay': '0.6s' } as React.CSSProperties}
        />
        <rect
          className="animate-wf-loop"
          rx="1.5"
          fill="currentColor"
          width="3"
          x="20"
          style={{ '--max-h': 8, '--delay': '0.8s' } as React.CSSProperties}
        />
      </svg>

      <style>{`
        @keyframes wf-pulsate {
          0%, 100% { 
            height: 4px; 
            y: 6px;
          }
          50% { 
            height: calc(var(--max-h) * 1px); 
            y: calc((16 - var(--max-h)) * 0.5px); 
          }
        }
        .animate-wf-loop {
          animation: wf-pulsate 2.5s ease-in-out infinite;
          animation-delay: var(--delay);
        }
      `}</style>
    </div>
  );
});

export { Waveform };