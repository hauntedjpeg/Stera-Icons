import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CherryBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CherryBoldDuotone = memo(
  forwardRef<SVGSVGElement, CherryBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.88 7a9 9 0 0 0-.7 2.07 5 5 0 1 0 2.38 9.68A7 7 0 0 0 9 16c0-2.2 1.02-4.17 2.61-5.46a5 5 0 0 0-2.4-1.39q.24-.95.79-1.86a7 7 0 0 1 3.37 2.22h-.01q.56-.21 1.16-.35-.16 1.05-.05 2.08a5 5 0 1 0 2-.22 7 7 0 0 1 .1-2 7 7 0 1 1-5.7 11.74l-.24-.27Q9.4 20.99 8 21a7 7 0 0 1-.12-14" />
        <path d="M22.03 1h.09l.17.04.06.02.03.01a1 1 0 0 1 .32.21v.01l.03.03.03.04a1 1 0 0 1 .13 1.09v.02l-.11.16-.03.03-.04.04-.02.02-.13.1-.02.02a1 1 0 0 1-.3.13h-.04l-.04.02h-.05c-1.81.2-3.57 1.66-4.67 3.68-1.1 2.01-1.35 4.28-.55 5.88a1 1 0 0 1-1.78.9c-1.2-2.4-.7-5.38.57-7.74q.72-1.3 1.76-2.39c-2.93.47-4.85 1.38-6.1 2.44A6.6 6.6 0 0 0 9 11a1 1 0 1 1-2 0c0-2.21.7-4.78 3.04-6.76C12.35 2.27 16.13 1 22 1z" opacity={.4} />
    </IconBase>
  ))
);

CherryBoldDuotone.displayName = 'CherryBoldDuotone';

// Triple export pattern
export { CherryBoldDuotone, CherryBoldDuotone as CherryBoldDuotoneIcon, CherryBoldDuotone as SiCherryBoldDuotone };
export default CherryBoldDuotone;
export type { CherryBoldDuotoneProps };
