import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.53 17.47c.3.3.3.77 0 1.06s-.77.3-1.06 0L6.75 7.81V6.75h1.06z" opacity={.4} />
        <path d="M16 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H6.75V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ArrowUpLeftRegularDuotone.displayName = 'ArrowUpLeftRegularDuotone';

// Triple export pattern
export { ArrowUpLeftRegularDuotone, ArrowUpLeftRegularDuotone as ArrowUpLeftRegularDuotoneIcon, ArrowUpLeftRegularDuotone as SiArrowUpLeftRegularDuotone };
export default ArrowUpLeftRegularDuotone;
export type { ArrowUpLeftRegularDuotoneProps };
