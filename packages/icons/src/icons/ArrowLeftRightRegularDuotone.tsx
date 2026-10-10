import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m20.94 12-.75.75H3.81L3.06 12l.75-.75H20.2z" opacity={.4} />
        <path d="M5.97 6.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06L3.06 12l3.97 3.97c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4.5-4.5c-.3-.3-.3-.77 0-1.06zM16.97 6.97c.3-.3.77-.3 1.06 0l4.5 4.5q.21.22.22.53 0 .31-.22.53l-4.5 4.5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L20.94 12l-3.97-3.97c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowLeftRightRegularDuotone.displayName = 'ArrowLeftRightRegularDuotone';

// Triple export pattern
export { ArrowLeftRightRegularDuotone, ArrowLeftRightRegularDuotone as ArrowLeftRightRegularDuotoneIcon, ArrowLeftRightRegularDuotone as SiArrowLeftRightRegularDuotone };
export default ArrowLeftRightRegularDuotone;
export type { ArrowLeftRightRegularDuotoneProps };
