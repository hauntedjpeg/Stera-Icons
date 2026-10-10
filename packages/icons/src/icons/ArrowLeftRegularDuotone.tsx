import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H6.81L6.06 12l.75-.75zM4.26 11.87v.26L4.25 12z" opacity={0.4} />
        <path d="M11.47 4.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L6.06 12l6.47 6.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-7-7c-.3-.3-.3-.77 0-1.06z" />
    </IconBase>
  ))
);

ArrowLeftRegularDuotone.displayName = 'ArrowLeftRegularDuotone';

// Triple export pattern
export { ArrowLeftRegularDuotone, ArrowLeftRegularDuotone as ArrowLeftRegularDuotoneIcon, ArrowLeftRegularDuotone as SiArrowLeftRegularDuotone };
export default ArrowLeftRegularDuotone;
export type { ArrowLeftRegularDuotoneProps };
