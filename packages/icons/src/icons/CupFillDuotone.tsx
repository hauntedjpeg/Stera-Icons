import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CupFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CupFillDuotone = memo(
  forwardRef<SVGSVGElement, CupFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.44 12.62a7.9 7.9 0 0 1-7.85 7.26H10.4a7.9 7.9 0 0 1-7.85-7.26l-.43-5.46c.08.68.64 1.13 1.05 1.37.51.3 1.19.54 1.95.73 1.54.39 3.61.62 5.87.62s4.33-.23 5.87-.62a8 8 0 0 0 1.95-.73c.41-.24.97-.69 1.05-1.37z" opacity={.4} />
        <path d="M19.71 9.13a3.37 3.37 0 0 1-.21 6.74h-1.06q.47-.82.73-1.74h.33a1.63 1.63 0 0 0 .07-3.25z" />
        <path fillRule="evenodd" d="M11 4.13c2.26 0 4.33.22 5.87.6.76.2 1.44.44 1.95.74.45.26 1.05.75 1.05 1.53s-.6 1.27-1.05 1.53c-.51.3-1.19.54-1.95.73a25 25 0 0 1-5.87.62 25 25 0 0 1-5.87-.62 8 8 0 0 1-1.95-.73C2.73 8.27 2.12 7.78 2.12 7s.61-1.27 1.06-1.53c.51-.3 1.19-.54 1.95-.73A25 25 0 0 1 11 4.12m0 1.75c-2.16 0-4.08.21-5.44.55q-1.04.28-1.49.54L4.03 7q.03 0 .04.03.45.26 1.49.54c1.36.34 3.28.55 5.44.55s4.08-.21 5.44-.55a6 6 0 0 0 1.49-.54l.03-.03-.03-.03q-.45-.26-1.49-.54A24 24 0 0 0 11 5.88" clipRule="evenodd" />
    </IconBase>
  ))
);

CupFillDuotone.displayName = 'CupFillDuotone';

// Triple export pattern (lucide-react style)
export { CupFillDuotone, CupFillDuotone as CupFillDuotoneIcon, CupFillDuotone as SiCupFillDuotone };
export default CupFillDuotone;
export type { CupFillDuotoneProps };
