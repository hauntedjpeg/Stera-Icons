import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge100BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge100BoldDuotone = memo(
  forwardRef<SVGSVGElement, Gauge100BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.46c6.08 0 11 4.93 11 11 0 3.04-1.23 5.8-3.22 7.78-.4.4-1.03.4-1.42 0-.39-.39-.39-1.02 0-1.41 1.41-1.41 2.35-3.28 2.58-5.37H19c-.55 0-1-.44-1-1 0-.55.45-1 1-1h1.94c-.19-1.73-.87-3.32-1.91-4.61l-1.38 1.37c-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41l1.37-1.38c-1.29-1.03-2.87-1.72-4.6-1.9v1.94c0 .55-.45 1-1 1-.56 0-1-.45-1-1V4.52c-1.74.2-3.33.88-4.63 1.91l1.38 1.38c.4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0L4.97 7.85c-1.04 1.3-1.72 2.88-1.91 4.61H5c.55 0 1 .45 1 1 0 .56-.45 1-1 1H3.06c.19 1.74.87 3.32 1.9 4.62l1.38-1.37c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41l-2.1 2.1-.01.02q-.15.15-.34.22c-.36.15-.79.08-1.08-.22l-.07-.08C2.2 19.18 1 16.46 1 13.46c0-6.07 4.92-11 11-11" opacity={.4} />
        <path d="M10.59 12.05c.78-.78 2.04-.78 2.82 0l.06.06c.33.38 1.42 1.84 2.39 3.14l1.32 1.78.42.58.11.15.04.05.06.09c.23.39.17.9-.15 1.22-.35.35-.9.4-1.3.1l-.02-.01-.04-.03-.16-.12-.57-.42-1.78-1.32c-1.3-.97-2.76-2.06-3.15-2.39l-.05-.05c-.78-.78-.78-2.05 0-2.83" />
    </IconBase>
  ))
);

Gauge100BoldDuotone.displayName = 'Gauge100BoldDuotone';

// Triple export pattern
export { Gauge100BoldDuotone, Gauge100BoldDuotone as Gauge100BoldDuotoneIcon, Gauge100BoldDuotone as SiGauge100BoldDuotone };
export default Gauge100BoldDuotone;
export type { Gauge100BoldDuotoneProps };
