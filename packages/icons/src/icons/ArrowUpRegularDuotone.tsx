import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 6.81V19c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.81l.75-.75z" opacity={.4} />
        <path d="M11.47 4.47c.3-.3.77-.3 1.06 0l7 7c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 6.06l-6.47 6.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06z" />
    </IconBase>
  ))
);

ArrowUpRegularDuotone.displayName = 'ArrowUpRegularDuotone';

// Triple export pattern
export { ArrowUpRegularDuotone, ArrowUpRegularDuotone as ArrowUpRegularDuotoneIcon, ArrowUpRegularDuotone as SiArrowUpRegularDuotone };
export default ArrowUpRegularDuotone;
export type { ArrowUpRegularDuotoneProps };
