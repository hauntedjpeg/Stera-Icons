import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 3c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1" opacity={.4} />
        <path d="M4.3 13.3c-.4.38-.4 1.02 0 1.4.38.4 1.02.4 1.4 0L11 9.42V21c0 .55.45 1 1 1s1-.45 1-1V9.41l5.3 5.3c.38.39 1.02.39 1.4 0 .4-.4.4-1.03 0-1.42l-7-7q-.03-.05-.1-.08l-.05-.04-.12-.07-.14-.06-.05-.01L12 6q-.12 0-.23.03l-.06.01-.14.06-.13.07-.15.12z" />
    </IconBase>
  ))
);

ArrowLineUpBoldDuotone.displayName = 'ArrowLineUpBoldDuotone';

// Triple export pattern
export { ArrowLineUpBoldDuotone, ArrowLineUpBoldDuotone as ArrowLineUpBoldDuotoneIcon, ArrowLineUpBoldDuotone as SiArrowLineUpBoldDuotone };
export default ArrowLineUpBoldDuotone;
export type { ArrowLineUpBoldDuotoneProps };
