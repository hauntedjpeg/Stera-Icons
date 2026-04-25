import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AsteriskAltFillDuotone = memo(
  forwardRef<SVGSVGElement, AsteriskAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13.53q.72.44 1.4.9a33 33 0 0 0 .79 5.07c.13.58-.08 1.14-.5 1.55-.43.4-1.04.64-1.69.64s-1.26-.23-1.69-.64a1.6 1.6 0 0 1-.5-1.55 35 35 0 0 0 .78-5.06q.69-.48 1.41-.91M5 6.02a1.6 1.6 0 0 1 1.6.34 35 35 0 0 0 4 3.2q.05.84.08 1.68-.75.4-1.5.76a33 33 0 0 0-4.77-1.86 1.6 1.6 0 0 1-1.09-1.2 2.4 2.4 0 0 1 .3-1.78c.32-.57.82-.98 1.39-1.14M17.4 6.36c.44-.41 1.03-.5 1.6-.34.56.16 1.07.57 1.39 1.14s.43 1.2.29 1.78a1.6 1.6 0 0 1-1.1 1.2A34 34 0 0 0 14.82 12q-.75-.37-1.49-.76.02-.84.09-1.68a33 33 0 0 0 4-3.2" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.31c.65 0 1.26.23 1.69.64s.63.97.5 1.55a34 34 0 0 0-.87 6.74 33 33 0 0 0 6.27 2.62c.57.17.94.63 1.09 1.2.14.58.03 1.22-.29 1.78-.33.57-.83.98-1.4 1.14s-1.15.07-1.59-.34l-.56-.52a33 33 0 0 0-4.84-3.6 33 33 0 0 0-5.4 4.12c-.44.41-1.03.5-1.6.34a2.4 2.4 0 0 1-1.39-1.14 2.4 2.4 0 0 1-.29-1.78c.15-.57.52-1.03 1.1-1.2a35 35 0 0 0 6.26-2.62A33 33 0 0 0 9.8 4.5c-.13-.58.08-1.14.5-1.55A2.4 2.4 0 0 1 12 2.31" clipRule="evenodd" />
    </IconBase>
  ))
);

AsteriskAltFillDuotone.displayName = 'AsteriskAltFillDuotone';

// Triple export pattern (lucide-react style)
export { AsteriskAltFillDuotone, AsteriskAltFillDuotone as AsteriskAltFillDuotoneIcon, AsteriskAltFillDuotone as SiAsteriskAltFillDuotone };
export default AsteriskAltFillDuotone;
export type { AsteriskAltFillDuotoneProps };
