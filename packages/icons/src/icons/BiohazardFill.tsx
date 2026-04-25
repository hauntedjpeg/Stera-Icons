import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BiohazardFillProps = Omit<IconBaseProps, 'children'>;

const BiohazardFill = memo(
  forwardRef<SVGSVGElement, BiohazardFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.06 2.24a.88.88 0 0 1 .88 1.52 4.1 4.1 0 0 0-1.86 4.86 5.85 5.85 0 0 1 7.84 0 4.1 4.1 0 0 0-1.86-4.86.88.88 0 0 1 .88-1.52 5.87 5.87 0 0 1 2.22 7.88A5.85 5.85 0 0 1 22.88 16a.87.87 0 0 1-1.75 0 4.1 4.1 0 0 0-3.35-4.05q.1.52.1 1.05a5.9 5.9 0 0 1-4.09 5.6 4.1 4.1 0 0 0 5.27.97.87.87 0 0 1 .88 1.52A5.87 5.87 0 0 1 12 19.08a5.84 5.84 0 0 1-7.94 2 .87.87 0 0 1 .88-1.5 4.1 4.1 0 0 0 5.27-.99 5.9 5.9 0 0 1-3.99-6.64A4.1 4.1 0 0 0 2.88 16a.87.87 0 0 1-1.75.09v-.1a5.9 5.9 0 0 1 5.7-5.87 5.85 5.85 0 0 1 2.23-7.88m7.05 10.37a3.46 3.46 0 0 0-2.61 3.44v.17q.03.3.1.58a4.1 4.1 0 0 0 2.5-4.19m-8.22 0-.01.39a4.1 4.1 0 0 0 2.52 3.8 3.5 3.5 0 0 0-.37-2.55A3.5 3.5 0 0 0 7.9 12.6M12 8.87a4 4 0 0 0-2.53.87 3.5 3.5 0 0 0 4.28.62q.44-.25.78-.62A4 4 0 0 0 12 8.87" clipRule="evenodd" />
    </IconBase>
  ))
);

BiohazardFill.displayName = 'BiohazardFill';

// Triple export pattern (lucide-react style)
export { BiohazardFill, BiohazardFill as BiohazardFillIcon, BiohazardFill as SiBiohazardFill };
export default BiohazardFill;
export type { BiohazardFillProps };
