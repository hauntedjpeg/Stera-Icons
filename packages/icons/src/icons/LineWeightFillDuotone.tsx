import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineWeightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineWeightFillDuotone = memo(
  forwardRef<SVGSVGElement, LineWeightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.75 15.88c.2 0 .38.16.38.37v2.5c0 .2-.17.38-.38.38H5.25c-.2 0-.37-.17-.37-.38v-2.5c0-.2.16-.37.37-.37zM19 8.88q.12 0 .13.12v1q-.01.12-.13.13H5q-.11-.01-.12-.13V9q0-.11.12-.12z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.75 14.13c1.17 0 2.13.95 2.13 2.12v2.5c0 1.17-.96 2.13-2.13 2.13H5.25c-1.17 0-2.12-.96-2.12-2.13v-2.5c0-1.17.95-2.12 2.12-2.12zm-13.5 1.74c-.2 0-.37.17-.37.38v2.5c0 .2.16.38.37.38h13.5c.2 0 .38-.17.38-.38v-2.5c0-.2-.17-.37-.38-.37zM19 7.13c1.04 0 1.88.83 1.88 1.87v1c0 1.04-.84 1.88-1.88 1.88H5c-1.04 0-1.87-.84-1.87-1.88V9c0-1.04.83-1.87 1.87-1.87zM5 8.88q-.11 0-.12.12v1q0 .12.12.13h14q.12-.01.13-.13V9q-.01-.11-.13-.12z" clipRule="evenodd" />
        <path d="M20 3.13c.48 0 .88.39.88.87s-.4.88-.88.88H4c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

LineWeightFillDuotone.displayName = 'LineWeightFillDuotone';

// Triple export pattern
export { LineWeightFillDuotone, LineWeightFillDuotone as LineWeightFillDuotoneIcon, LineWeightFillDuotone as SiLineWeightFillDuotone };
export default LineWeightFillDuotone;
export type { LineWeightFillDuotoneProps };
