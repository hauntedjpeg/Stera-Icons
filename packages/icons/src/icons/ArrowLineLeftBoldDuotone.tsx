import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 3c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1" opacity={.4} />
        <path d="M13.3 4.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L9.42 11H21c.55 0 1 .45 1 1s-.45 1-1 1H9.41l5.3 5.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-7-7q-.05-.04-.08-.1-.03-.01-.04-.05l-.07-.12-.06-.14-.01-.05L6 12q0-.12.03-.23l.01-.06.06-.14.07-.13.12-.15z" />
    </IconBase>
  ))
);

ArrowLineLeftBoldDuotone.displayName = 'ArrowLineLeftBoldDuotone';

// Triple export pattern
export { ArrowLineLeftBoldDuotone, ArrowLineLeftBoldDuotone as ArrowLineLeftBoldDuotoneIcon, ArrowLineLeftBoldDuotone as SiArrowLineLeftBoldDuotone };
export default ArrowLineLeftBoldDuotone;
export type { ArrowLineLeftBoldDuotoneProps };
