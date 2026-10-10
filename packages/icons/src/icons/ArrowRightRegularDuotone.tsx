import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m17.94 12-.75.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.19z" opacity={.4} />
        <path d="M11.47 4.47c.3-.3.77-.3 1.06 0l7 7c.3.3.3.77 0 1.06l-7 7c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L17.94 12l-6.47-6.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowRightRegularDuotone.displayName = 'ArrowRightRegularDuotone';

// Triple export pattern
export { ArrowRightRegularDuotone, ArrowRightRegularDuotone as ArrowRightRegularDuotoneIcon, ArrowRightRegularDuotone as SiArrowRightRegularDuotone };
export default ArrowRightRegularDuotone;
export type { ArrowRightRegularDuotoneProps };
