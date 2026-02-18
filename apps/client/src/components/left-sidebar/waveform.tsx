import { cn } from '@/lib/utils';
import { memo } from 'react';

type TIndicatorProps = {
  className?: string;
  isScreenSharing?: boolean;
};

const Waveform = memo(({ className, isScreenSharing }: TIndicatorProps) => {
  const colorClass = isScreenSharing ? 'text-blue-500' : 'text-green-500';

  if (isScreenSharing) {
    return (
      <div
        className={cn(
          'flex items-center justify-center h-4 w-4 animate-in zoom-in-75 duration-300',
          colorClass,
          className
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            className="animate-eye-blink"
            cx="12"
            cy="12"
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
        'flex items-center justify-center h-4 w-4 animate-in fade-in duration-700',
        colorClass,
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        style={{ shapeRendering: 'geometricPrecision' }}
      >
        <rect
          className="animate-wf-loop"
          rx="1"
          fill="currentColor"
          width="2"
          x="3"
          style={{ '--max-h': 10, '--delay': '0.0s' } as React.CSSProperties}
        />
        <rect
          className="animate-wf-loop"
          rx="1"
          fill="currentColor"
          width="2"
          x="7"
          style={{ '--max-h': 16, '--delay': '0.2s' } as React.CSSProperties}
        />
        <rect
          className="animate-wf-loop"
          rx="1"
          fill="currentColor"
          width="2"
          x="11"
          style={{ '--max-h': 12, '--delay': '0.4s' } as React.CSSProperties}
        />
        <rect
          className="animate-wf-loop"
          rx="1"
          fill="currentColor"
          width="2"
          x="15"
          style={{ '--max-h': 20, '--delay': '0.6s' } as React.CSSProperties}
        />
        <rect
          className="animate-wf-loop"
          rx="1"
          fill="currentColor"
          width="2"
          x="19"
          style={{ '--max-h': 10, '--delay': '0.8s' } as React.CSSProperties}
        />
      </svg>

      <style>{`
        @keyframes wf-pulsate {
          0%, 100% { 
            height: 6px; 
            y: 9px;
          }
          50% { 
            height: calc(var(--max-h) * 1px); 
            y: calc((24 - var(--max-h)) * 0.5px); 
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