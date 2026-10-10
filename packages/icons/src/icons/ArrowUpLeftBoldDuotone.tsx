import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.7 17.3c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L7 8.42V7h1.41z" opacity={.4} />
        <path d="M16 5c.55 0 1 .45 1 1s-.45 1-1 1H7v9c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

ArrowUpLeftBoldDuotone.displayName = 'ArrowUpLeftBoldDuotone';

// Triple export pattern
export { ArrowUpLeftBoldDuotone, ArrowUpLeftBoldDuotone as ArrowUpLeftBoldDuotoneIcon, ArrowUpLeftBoldDuotone as SiArrowUpLeftBoldDuotone };
export default ArrowUpLeftBoldDuotone;
export type { ArrowUpLeftBoldDuotoneProps };
