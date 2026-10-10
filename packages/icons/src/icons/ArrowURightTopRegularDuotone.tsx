import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightTopRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m18.94 8-.75.75H10.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75H15c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25h7.69z" opacity={.4} />
        <path d="M15.47 3.47c.3-.3.77-.3 1.06 0l4 4 .1.11q.12.2.12.42 0 .31-.22.53l-4 4c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L18.94 8l-3.47-3.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowURightTopRegularDuotone.displayName = 'ArrowURightTopRegularDuotone';

// Triple export pattern
export { ArrowURightTopRegularDuotone, ArrowURightTopRegularDuotone as ArrowURightTopRegularDuotoneIcon, ArrowURightTopRegularDuotone as SiArrowURightTopRegularDuotone };
export default ArrowURightTopRegularDuotone;
export type { ArrowURightTopRegularDuotoneProps };
