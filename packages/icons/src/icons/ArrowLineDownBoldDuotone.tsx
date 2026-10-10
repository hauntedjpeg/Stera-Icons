import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 20c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M12 2c.55 0 1 .45 1 1v11.59l5.3-5.3c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-7 7c-.38.39-1.02.39-1.4 0l-7-7c-.4-.4-.4-1.03 0-1.42.38-.39 1.02-.39 1.4 0l5.3 5.3V3c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ArrowLineDownBoldDuotone.displayName = 'ArrowLineDownBoldDuotone';

// Triple export pattern
export { ArrowLineDownBoldDuotone, ArrowLineDownBoldDuotone as ArrowLineDownBoldDuotoneIcon, ArrowLineDownBoldDuotone as SiArrowLineDownBoldDuotone };
export default ArrowLineDownBoldDuotone;
export type { ArrowLineDownBoldDuotoneProps };
