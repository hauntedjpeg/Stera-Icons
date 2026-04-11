import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseFillDuotone = memo(
  forwardRef<SVGSVGElement, PauseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.75 2.63c1.17 0 2.13.95 2.13 2.12v14.5c0 1.17-.96 2.13-2.13 2.13h-2.5a2.13 2.13 0 0 1-2.12-2.13V4.75c0-1.17.95-2.12 2.12-2.12z" opacity={.4} />
        <path d="M8.75 2.63c1.17 0 2.13.95 2.13 2.12v14.5c0 1.17-.96 2.13-2.13 2.13h-2.5a2.13 2.13 0 0 1-2.12-2.13V4.75c0-1.17.95-2.12 2.12-2.12z" />
    </IconBase>
  ))
);

PauseFillDuotone.displayName = 'PauseFillDuotone';

// Triple export pattern (lucide-react style)
export { PauseFillDuotone, PauseFillDuotone as PauseFillDuotoneIcon, PauseFillDuotone as SiPauseFillDuotone };
export default PauseFillDuotone;
export type { PauseFillDuotoneProps };
