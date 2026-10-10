import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftDownRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftDownRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftDownRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 17.59V19h-1.41L5 6.41V5h1.41z" opacity={.4} />
        <path d="M20 12.5c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1h-6.5c-.55 0-1-.45-1-1s.45-1 1-1H19v-5.5c0-.55.45-1 1-1M10.5 3c.55 0 1 .45 1 1s-.45 1-1 1H5v5.5c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

ArrowUpLeftDownRightBoldDuotone.displayName = 'ArrowUpLeftDownRightBoldDuotone';

// Triple export pattern
export { ArrowUpLeftDownRightBoldDuotone, ArrowUpLeftDownRightBoldDuotone as ArrowUpLeftDownRightBoldDuotoneIcon, ArrowUpLeftDownRightBoldDuotone as SiArrowUpLeftDownRightBoldDuotone };
export default ArrowUpLeftDownRightBoldDuotone;
export type { ArrowUpLeftDownRightBoldDuotoneProps };
