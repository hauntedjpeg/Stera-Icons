import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CupFillProps = Omit<IconBaseProps, 'children'>;

const CupFill = memo(
  forwardRef<SVGSVGElement, CupFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 4.13c2.26 0 4.33.22 5.87.6.76.2 1.44.44 1.95.74.45.26 1.05.75 1.05 1.53v.16l-.16 1.97a3.37 3.37 0 0 1-.21 6.74h-1.06a7.9 7.9 0 0 1-6.85 4H10.4a7.9 7.9 0 0 1-7.85-7.25l-.43-5.46V7c0-.78.6-1.27 1.05-1.53.51-.3 1.19-.54 1.95-.73A25 25 0 0 1 11 4.12m8.44 8.49a8 8 0 0 1-.27 1.5h.33a1.63 1.63 0 0 0 .07-3.24zM11 5.88c-2.16 0-4.08.21-5.44.55q-1.04.28-1.49.54L4.03 7l.02.01.06.03q.42.24 1.27.48l.22.06c1.1.26 2.54.45 4.17.52a31 31 0 0 0 2.46 0c1.63-.07 3.08-.26 4.17-.52l.22-.06q.86-.24 1.27-.48.03 0 .05-.03l.02-.01-.03-.03q-.45-.26-1.49-.54A24 24 0 0 0 11 5.88" clipRule="evenodd" />
    </IconBase>
  ))
);

CupFill.displayName = 'CupFill';

// Triple export pattern (lucide-react style)
export { CupFill, CupFill as CupFillIcon, CupFill as SiCupFill };
export default CupFill;
export type { CupFillProps };
