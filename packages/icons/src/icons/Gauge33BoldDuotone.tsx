import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge33BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge33BoldDuotone = memo(
  forwardRef<SVGSVGElement, Gauge33BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.46c6.08 0 11 4.93 11 11 0 3-1.2 5.72-3.14 7.7l-.08.08c-.3.3-.72.37-1.08.22q-.18-.07-.34-.22l-.01-.02-2.1-2.1c-.4-.39-.4-1.02 0-1.41.39-.4 1.02-.4 1.41 0l1.37 1.37c1.04-1.3 1.72-2.88 1.91-4.62H19c-.55 0-1-.44-1-1 0-.55.45-1 1-1h1.94c-.19-1.73-.87-3.32-1.91-4.61l-1.38 1.37c-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41l1.37-1.38c-1.29-1.03-2.87-1.72-4.6-1.9v1.94c0 .55-.45 1-1 1-.56 0-1-.45-1-1V4.52c-4.18.46-7.5 3.77-7.95 7.94H5c.55 0 1 .45 1 1 0 .56-.45 1-1 1H3.06c.19 1.74.87 3.32 1.9 4.62l1.38-1.37c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41l-2.1 2.1-.01.02q-.15.15-.34.22c-.36.15-.79.08-1.08-.22l-.07-.08C2.2 19.18 1 16.46 1 13.46c0-6.07 4.92-11 11-11" opacity={.4} />
        <path d="M6.34 7.8c.35-.34.9-.38 1.3-.1v.01h.02q0 .03.04.04l.16.12.57.42L10.2 9.6c1.3.97 2.76 2.06 3.15 2.39l.05.05c.78.78.78 2.05 0 2.83s-2.04.78-2.82 0l-.06-.06c-.33-.38-1.42-1.84-2.39-3.14L6.82 9.89l-.42-.57-.11-.16-.04-.04v-.01l-.06-.08c-.23-.39-.17-.9.15-1.22" />
    </IconBase>
  ))
);

Gauge33BoldDuotone.displayName = 'Gauge33BoldDuotone';

// Triple export pattern
export { Gauge33BoldDuotone, Gauge33BoldDuotone as Gauge33BoldDuotoneIcon, Gauge33BoldDuotone as SiGauge33BoldDuotone };
export default Gauge33BoldDuotone;
export type { Gauge33BoldDuotoneProps };
