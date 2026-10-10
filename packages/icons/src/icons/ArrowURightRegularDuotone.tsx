import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 4.25c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75h7.69l.75.75-.75.75H10.5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25z" opacity={.4} />
        <path d="M15.47 11.47c.3-.3.77-.3 1.06 0l4 4q.22.22.22.53 0 .23-.13.42l-.09.11-4 4c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L18.94 16l-3.47-3.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowURightRegularDuotone.displayName = 'ArrowURightRegularDuotone';

// Triple export pattern
export { ArrowURightRegularDuotone, ArrowURightRegularDuotone as ArrowURightRegularDuotoneIcon, ArrowURightRegularDuotone as SiArrowURightRegularDuotone };
export default ArrowURightRegularDuotone;
export type { ArrowURightRegularDuotoneProps };
