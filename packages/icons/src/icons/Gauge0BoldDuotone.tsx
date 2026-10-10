import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge0BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge0BoldDuotone = memo(
  forwardRef<SVGSVGElement, Gauge0BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.46c6.08 0 11 4.93 11 11 0 3-1.2 5.72-3.15 7.7l-.07.08c-.3.3-.72.37-1.08.22l-.04-.01-.07-.04q-.12-.07-.23-.17l-.01-.02-2.1-2.1c-.4-.39-.4-1.02 0-1.41.39-.4 1.02-.4 1.41 0l1.37 1.37c1.04-1.3 1.72-2.88 1.91-4.62H19c-.55 0-1-.44-1-1 0-.55.45-1 1-1h1.94c-.19-1.73-.87-3.32-1.91-4.61l-1.38 1.37c-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41l1.37-1.38c-1.29-1.03-2.87-1.72-4.6-1.9v1.94c0 .55-.45 1-1 1-.56 0-1-.45-1-1V4.52c-1.74.19-3.33.88-4.63 1.91l1.38 1.38c.4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0L4.97 7.85c-1.04 1.3-1.72 2.88-1.91 4.61H5c.55 0 1 .45 1 1 0 .56-.45 1-1 1H3.06c.23 2.09 1.17 3.96 2.58 5.37.39.39.39 1.02 0 1.41-.4.4-1.03.4-1.42 0C2.23 19.25 1 16.5 1 13.46c0-6.07 4.92-11 11-11" opacity={.4} />
        <path d="M10.59 12.05c.78-.78 2.04-.78 2.82 0 .79.78.79 2.05 0 2.83l-.05.05c-.39.33-1.84 1.42-3.15 2.39l-1.78 1.32-.57.42-.16.12-.04.03h-.01l-.08.06c-.4.23-.9.18-1.23-.15-.35-.35-.39-.9-.1-1.3l.02-.01.03-.05.11-.15.42-.58 1.32-1.78c.97-1.3 2.06-2.76 2.4-3.14z" />
    </IconBase>
  ))
);

Gauge0BoldDuotone.displayName = 'Gauge0BoldDuotone';

// Triple export pattern
export { Gauge0BoldDuotone, Gauge0BoldDuotone as Gauge0BoldDuotoneIcon, Gauge0BoldDuotone as SiGauge0BoldDuotone };
export default Gauge0BoldDuotone;
export type { Gauge0BoldDuotoneProps };
