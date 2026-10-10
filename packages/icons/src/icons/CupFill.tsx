import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CupFillProps = Omit<IconBaseProps, 'children'>;

const CupFill = memo(
  forwardRef<SVGSVGElement, CupFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 4.13c2.26 0 4.33.22 5.87.6.76.2 1.44.44 1.95.74.45.26 1.05.75 1.05 1.53v.16l-.16 1.97c1.77.11 3.16 1.58 3.16 3.37 0 1.86-1.5 3.37-3.37 3.38h-1.06c-1.35 2.4-3.93 4-6.85 4H10.4c-4.1 0-7.53-3.17-7.85-7.26l-.43-5.46V7c0-.78.6-1.27 1.05-1.53.51-.3 1.19-.54 1.95-.73 1.54-.39 3.61-.62 5.87-.62m8.44 8.49q-.06.78-.27 1.5h.33c.9 0 1.63-.72 1.63-1.62 0-.87-.7-1.58-1.56-1.62zM11 5.88c-2.16 0-4.08.21-5.44.55q-1.04.28-1.49.54L4.03 7l.02.01.06.03q.42.24 1.27.48l.22.06c1.1.26 2.54.45 4.17.52q.6.02 1.23.03t1.23-.03c1.63-.07 3.08-.26 4.17-.52l.22-.06q.86-.24 1.27-.48.03 0 .05-.03l.02-.01-.03-.03q-.45-.26-1.49-.54c-1.36-.34-3.28-.55-5.44-.55" clipRule="evenodd" />
    </IconBase>
  ))
);

CupFill.displayName = 'CupFill';

// Triple export pattern
export { CupFill, CupFill as CupFillIcon, CupFill as SiCupFill };
export default CupFill;
export type { CupFillProps };
