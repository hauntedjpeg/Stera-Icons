import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge66BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge66BoldDuotone = memo(
  forwardRef<SVGSVGElement, Gauge66BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.46c6.08 0 11 4.93 11 11 0 3-1.2 5.72-3.15 7.7l-.07.08c-.3.3-.72.37-1.08.22l-.04-.01-.07-.04q-.12-.07-.23-.17l-.01-.02-2.1-2.1c-.4-.39-.4-1.02 0-1.41.39-.4 1.02-.4 1.41 0l1.37 1.37c1.04-1.3 1.72-2.88 1.91-4.62H19c-.55 0-1-.44-1-1 0-.55.45-1 1-1h1.94C20.48 8.3 17.17 4.98 13 4.52v1.95c0 .55-.44 1-1 1-.55 0-1-.45-1-1V4.52c-1.73.19-3.32.88-4.62 1.91l1.38 1.38c.4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0L4.97 7.85c-1.04 1.3-1.72 2.88-1.91 4.61H5c.55 0 1 .45 1 1 0 .56-.45 1-1 1H3.06c.19 1.74.87 3.32 1.9 4.62l1.38-1.37c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41l-2.1 2.1-.01.02q-.1.1-.23.17l-.07.04-.04.01c-.36.15-.79.08-1.08-.22l-.07-.08C2.2 19.18 1 16.46 1 13.46c0-6.07 4.92-11 11-11" opacity={.4} />
        <path d="M16.36 7.7c.4-.28.95-.24 1.3.1.35.36.39.9.1 1.3v.01l-.01.01-.04.04-.11.16-.42.57-1.32 1.79c-.97 1.3-2.06 2.76-2.4 3.14l-.05.06c-.78.78-2.04.78-2.82 0-.79-.78-.79-2.05 0-2.83l.05-.05c.39-.33 1.84-1.42 3.15-2.4l1.78-1.31.57-.42.16-.12.04-.03h.01z" />
    </IconBase>
  ))
);

Gauge66BoldDuotone.displayName = 'Gauge66BoldDuotone';

// Triple export pattern
export { Gauge66BoldDuotone, Gauge66BoldDuotone as Gauge66BoldDuotoneIcon, Gauge66BoldDuotone as SiGauge66BoldDuotone };
export default Gauge66BoldDuotone;
export type { Gauge66BoldDuotoneProps };
