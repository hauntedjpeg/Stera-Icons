import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineWeightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineWeightFillDuotone = memo(
  forwardRef<SVGSVGElement, LineWeightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.75 15.88c.2 0 .38.16.38.37v2.5c0 .2-.17.38-.38.38H5.25a.4.4 0 0 1-.37-.38v-2.5c0-.2.16-.37.37-.37zM19 8.88q.12 0 .13.12v1q-.01.12-.13.13H5a.13.13 0 0 1-.12-.13V9q0-.11.12-.12z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.75 14.13c1.17 0 2.13.95 2.13 2.12v2.5c0 1.17-.96 2.13-2.13 2.13H5.25a2.13 2.13 0 0 1-2.12-2.13v-2.5c0-1.17.95-2.12 2.12-2.12zm-13.5 1.74c-.2 0-.37.17-.37.38v2.5c0 .2.16.38.37.38h13.5c.2 0 .38-.17.38-.38v-2.5c0-.2-.17-.37-.38-.37zM19 7.13c1.04 0 1.88.83 1.88 1.87v1c0 1.04-.84 1.88-1.88 1.88H5A1.9 1.9 0 0 1 3.13 10V9c0-1.04.83-1.87 1.87-1.87zM5 8.88a.12.12 0 0 0-.12.12v1q0 .12.12.13h14q.12-.01.13-.13V9a.13.13 0 0 0-.13-.12z" clipRule="evenodd" />
        <path d="M20 3.13a.88.88 0 0 1 0 1.75H4a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

LineWeightFillDuotone.displayName = 'LineWeightFillDuotone';

// Triple export pattern (lucide-react style)
export { LineWeightFillDuotone, LineWeightFillDuotone as LineWeightFillDuotoneIcon, LineWeightFillDuotone as SiLineWeightFillDuotone };
export default LineWeightFillDuotone;
export type { LineWeightFillDuotoneProps };
