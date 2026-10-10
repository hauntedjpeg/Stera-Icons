import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DollarCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, DollarCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-.25 3.25c-.48 0-.87.39-.87.87v1.38h-.13c-1.45 0-2.62 1.17-2.62 2.62s1.17 2.63 2.62 2.63h3c.48 0 .88.39.88.87s-.4.88-.88.88H9c-.48 0-.87.39-.87.87s.39.88.87.88h2.38v1.37c0 .48.39.88.87.88s.88-.4.88-.88v-1.37h.62c1.45 0 2.63-1.18 2.63-2.63s-1.18-2.62-2.63-2.62h-3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h3.75c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-1.87V6.25c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M11.75 5.38c.48 0 .88.39.88.87v1.38h1.87c.48 0 .88.39.88.87s-.4.88-.88.88h-3.75c-.48 0-.87.39-.87.87s.39.88.87.88h3c1.45 0 2.63 1.17 2.63 2.62s-1.18 2.63-2.63 2.63h-.62v1.37c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-1.37H9c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h4.75c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-3c-1.45 0-2.62-1.18-2.62-2.63s1.17-2.62 2.62-2.62h.13V6.25c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

DollarCircleFillDuotone.displayName = 'DollarCircleFillDuotone';

// Triple export pattern
export { DollarCircleFillDuotone, DollarCircleFillDuotone as DollarCircleFillDuotoneIcon, DollarCircleFillDuotone as SiDollarCircleFillDuotone };
export default DollarCircleFillDuotone;
export type { DollarCircleFillDuotoneProps };
