import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge15BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge15BoldDuotone = memo(
  forwardRef<SVGSVGElement, Gauge15BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.46c6.08 0 11 4.93 11 11 0 3-1.2 5.72-3.15 7.7l-.07.08c-.3.3-.72.37-1.08.22l-.04-.01-.07-.04q-.12-.07-.23-.17l-.01-.02-2.1-2.1c-.4-.39-.4-1.02 0-1.41.39-.4 1.02-.4 1.41 0l1.37 1.37c1.04-1.3 1.72-2.88 1.91-4.62H19c-.55 0-1-.44-1-1 0-.55.45-1 1-1h1.94c-.19-1.73-.87-3.32-1.91-4.61l-1.38 1.37c-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41l1.37-1.38c-1.29-1.03-2.87-1.72-4.6-1.9v1.94c0 .55-.45 1-1 1-.56 0-1-.45-1-1V4.52c-1.74.19-3.33.88-4.63 1.91l1.38 1.38c.4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0L4.97 7.85C3.74 9.39 3 11.34 3 13.46s.74 4.08 1.97 5.62l1.37-1.37c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41l-2.1 2.1-.01.02q-.1.1-.23.17l-.07.04-.04.01c-.36.15-.79.08-1.08-.22l-.07-.08C2.2 19.18 1 16.46 1 13.46c0-6.07 4.92-11 11-11" opacity={.4} />
        <path d="M12 11.46c1.1 0 2 .9 2 2s-.9 2-2 2h-.08c-.5-.04-2.3-.3-3.91-.53l-2.2-.33-.7-.1-.2-.04h-.06c-.49-.08-.85-.5-.85-1 0-.49.36-.91.85-.98h.02l.05-.02.2-.02.7-.11L8 12c1.6-.24 3.4-.5 3.91-.53z" />
    </IconBase>
  ))
);

Gauge15BoldDuotone.displayName = 'Gauge15BoldDuotone';

// Triple export pattern
export { Gauge15BoldDuotone, Gauge15BoldDuotone as Gauge15BoldDuotoneIcon, Gauge15BoldDuotone as SiGauge15BoldDuotone };
export default Gauge15BoldDuotone;
export type { Gauge15BoldDuotoneProps };
