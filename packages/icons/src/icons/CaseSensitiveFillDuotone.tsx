import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CaseSensitiveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CaseSensitiveFillDuotone = memo(
  forwardRef<SVGSVGElement, CaseSensitiveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21 9.25c.69 0 1.25.56 1.25 1.25v7a1.25 1.25 0 0 1-2.33.63 4.5 4.5 0 0 1-2.3.62A4.7 4.7 0 0 1 13 14a4.7 4.7 0 0 1 4.63-4.75q1.27.02 2.29.62c.22-.37.62-.62 1.08-.62m-3.37 2.5c-1.14 0-2.13.96-2.13 2.25s1 2.25 2.13 2.25 2.12-.96 2.12-2.25-1-2.25-2.12-2.25" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M5.86 6.38a1.75 1.75 0 0 1 3.22-.14l.06.14 4.03 10.68a1.25 1.25 0 1 1-2.34.88l-1.02-2.69H5.2l-1.02 2.7a1.25 1.25 0 1 1-2.34-.9zm.27 6.37h2.74L7.5 9.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

CaseSensitiveFillDuotone.displayName = 'CaseSensitiveFillDuotone';

// Triple export pattern (lucide-react style)
export { CaseSensitiveFillDuotone, CaseSensitiveFillDuotone as CaseSensitiveFillDuotoneIcon, CaseSensitiveFillDuotone as SiCaseSensitiveFillDuotone };
export default CaseSensitiveFillDuotone;
export type { CaseSensitiveFillDuotoneProps };
