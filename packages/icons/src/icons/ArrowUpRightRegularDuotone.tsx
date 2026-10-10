import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.25 6.75v1.06L6.53 18.53c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L16.19 6.75z" opacity={.4} />
        <path d="M18 5.25c.41 0 .75.34.75.75v10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ArrowUpRightRegularDuotone.displayName = 'ArrowUpRightRegularDuotone';

// Triple export pattern
export { ArrowUpRightRegularDuotone, ArrowUpRightRegularDuotone as ArrowUpRightRegularDuotoneIcon, ArrowUpRightRegularDuotone as SiArrowUpRightRegularDuotone };
export default ArrowUpRightRegularDuotone;
export type { ArrowUpRightRegularDuotoneProps };
