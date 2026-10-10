import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 3.81V20.2l-.75.75-.75-.75V3.81l.75-.75z" opacity={.4} />
        <path d="M15.97 16.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4.5 4.5c-.3.3-.77.3-1.06 0l-4.5-4.5c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 20.94zM12 1.25q.31 0 .53.22l4.5 4.5c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 3.06 8.03 7.03c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4.5-4.5.11-.1q.2-.12.42-.12" />
    </IconBase>
  ))
);

ArrowUpDownRegularDuotone.displayName = 'ArrowUpDownRegularDuotone';

// Triple export pattern
export { ArrowUpDownRegularDuotone, ArrowUpDownRegularDuotone as ArrowUpDownRegularDuotoneIcon, ArrowUpDownRegularDuotone as SiArrowUpDownRegularDuotone };
export default ArrowUpDownRegularDuotone;
export type { ArrowUpDownRegularDuotoneProps };
