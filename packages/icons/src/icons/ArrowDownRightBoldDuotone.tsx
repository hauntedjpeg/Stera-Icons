import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.3 5.3c.38-.4 1.02-.4 1.4 0L17 15.58V17h-1.41L5.29 6.7c-.39-.38-.39-1.02 0-1.4" opacity={.4} />
        <path d="M18 7c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h9V8c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ArrowDownRightBoldDuotone.displayName = 'ArrowDownRightBoldDuotone';

// Triple export pattern
export { ArrowDownRightBoldDuotone, ArrowDownRightBoldDuotone as ArrowDownRightBoldDuotoneIcon, ArrowDownRightBoldDuotone as SiArrowDownRightBoldDuotone };
export default ArrowDownRightBoldDuotone;
export type { ArrowDownRightBoldDuotoneProps };
