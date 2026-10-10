import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.5 8c0 .55.45 1 1 1H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4.5c-.55 0-1 .45-1 1v1H6c-1.66 0-3-1.34-3-3v-4c0-1.66 1.34-3 3-3h3.5z" opacity={.4} />
        <path d="M9.5 3.2c0-1.33 1.62-2 2.56-1.05l8.26 8.26c.88.88.88 2.3 0 3.18l-8.26 8.26c-.94.95-2.56.28-2.56-1.06V16c0-.55.45-1 1-1s1 .45 1 1v3.59l7.4-7.41c.1-.1.1-.26 0-.36l-7.4-7.4V8c0 .55-.45 1-1 1s-1-.45-1-1z" />
    </IconBase>
  ))
);

ArrowBigRightBoldDuotone.displayName = 'ArrowBigRightBoldDuotone';

// Triple export pattern
export { ArrowBigRightBoldDuotone, ArrowBigRightBoldDuotone as ArrowBigRightBoldDuotoneIcon, ArrowBigRightBoldDuotone as SiArrowBigRightBoldDuotone };
export default ArrowBigRightBoldDuotone;
export type { ArrowBigRightBoldDuotoneProps };
