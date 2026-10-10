import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge50BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge50BoldDuotone = memo(
  forwardRef<SVGSVGElement, Gauge50BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.46c6.08 0 11 4.93 11 11 0 3-1.2 5.72-3.15 7.7l-.07.08c-.3.3-.72.37-1.08.22l-.04-.01-.07-.04q-.12-.07-.23-.17l-.01-.02-2.1-2.1c-.4-.39-.4-1.02 0-1.41.39-.4 1.02-.4 1.41 0l1.37 1.37c1.04-1.3 1.72-2.88 1.91-4.62H19c-.55 0-1-.44-1-1 0-.55.45-1 1-1h1.94c-.19-1.73-.87-3.32-1.91-4.61l-1.38 1.37c-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41l1.37-1.38C16.07 5.2 14.12 4.46 12 4.46s-4.08.74-5.62 1.97l1.38 1.38c.4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0L4.97 7.85c-1.04 1.3-1.72 2.88-1.91 4.61H5c.55 0 1 .45 1 1 0 .56-.45 1-1 1H3.06c.19 1.74.87 3.32 1.9 4.62l1.38-1.37c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41l-2.1 2.1-.01.02q-.1.1-.23.17l-.07.04-.04.01c-.36.15-.79.08-1.08-.22l-.07-.08C2.2 19.18 1 16.46 1 13.46c0-6.07 4.92-11 11-11" opacity={.4} />
        <path d="M12 5.46c.5 0 .91.36.99.85v.07l.04.2.1.7c.1.58.21 1.37.33 2.2.24 1.6.5 3.4.54 3.9v.08c0 1.1-.9 2-2 2s-2-.9-2-2v-.07c.04-.5.3-2.3.54-3.92l.33-2.2.1-.7.03-.19v-.05l.01-.01c.08-.5.5-.86.99-.86" />
    </IconBase>
  ))
);

Gauge50BoldDuotone.displayName = 'Gauge50BoldDuotone';

// Triple export pattern
export { Gauge50BoldDuotone, Gauge50BoldDuotone as Gauge50BoldDuotoneIcon, Gauge50BoldDuotone as SiGauge50BoldDuotone };
export default Gauge50BoldDuotone;
export type { Gauge50BoldDuotoneProps };
