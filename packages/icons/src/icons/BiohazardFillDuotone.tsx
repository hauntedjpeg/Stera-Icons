import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BiohazardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BiohazardFillDuotone = memo(
  forwardRef<SVGSVGElement, BiohazardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 12a4.1 4.1 0 0 1 3 5 4.13 4.13 0 0 1-3-5M16 12a4.13 4.13 0 0 1-3 5q-.1-.33-.11-.68l-.02-.26v-.13A4.1 4.1 0 0 1 16 12M12 8.88c1.18 0 2.24.5 3 1.28a4.1 4.1 0 0 1-3 1.3c-1.18 0-2.24-.5-3-1.3a4.1 4.1 0 0 1 3-1.28" opacity={0.4} />
        <path fillRule="evenodd" d="M9.06 2.24a.88.88 0 0 1 .88 1.52 4.1 4.1 0 0 0-1.86 4.86 5.85 5.85 0 0 1 7.84 0 4.1 4.1 0 0 0-1.86-4.86.88.88 0 0 1 .88-1.52 5.87 5.87 0 0 1 2.22 7.88A5.85 5.85 0 0 1 22.88 16a.87.87 0 0 1-1.75 0 4.1 4.1 0 0 0-3.35-4.05q.1.52.1 1.05a5.9 5.9 0 0 1-4.09 5.6 4.1 4.1 0 0 0 5.27.97.87.87 0 0 1 .88 1.52A5.87 5.87 0 0 1 12 19.08a5.84 5.84 0 0 1-7.94 2 .87.87 0 0 1 .88-1.5 4.1 4.1 0 0 0 5.27-.99 5.9 5.9 0 0 1-3.99-6.64A4.1 4.1 0 0 0 2.88 16a.87.87 0 0 1-1.75.09v-.1a5.9 5.9 0 0 1 5.7-5.87 5.85 5.85 0 0 1 2.23-7.88M8 12a4.13 4.13 0 0 0 3 5 4.1 4.1 0 0 0-.43-3.06A4 4 0 0 0 8 12m8 0a4.1 4.1 0 0 0-3.12 4.06v.26q.04.35.12.68a4.13 4.13 0 0 0 3-5m-4-3.13c-1.18 0-2.24.5-3 1.3a4.1 4.1 0 0 0 6 0 4.1 4.1 0 0 0-3-1.3" clipRule="evenodd" />
    </IconBase>
  ))
);

BiohazardFillDuotone.displayName = 'BiohazardFillDuotone';

// Triple export pattern (lucide-react style)
export { BiohazardFillDuotone, BiohazardFillDuotone as BiohazardFillDuotoneIcon, BiohazardFillDuotone as SiBiohazardFillDuotone };
export default BiohazardFillDuotone;
export type { BiohazardFillDuotoneProps };
