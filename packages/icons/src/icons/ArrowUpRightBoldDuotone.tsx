import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 7v1.41L6.7 18.71c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L15.58 7z" opacity={.4} />
        <path d="M8 5c-.55 0-1 .45-1 1s.45 1 1 1h9v9c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1z" />
    </IconBase>
  ))
);

ArrowUpRightBoldDuotone.displayName = 'ArrowUpRightBoldDuotone';

// Triple export pattern
export { ArrowUpRightBoldDuotone, ArrowUpRightBoldDuotone as ArrowUpRightBoldDuotoneIcon, ArrowUpRightBoldDuotone as SiArrowUpRightBoldDuotone };
export default ArrowUpRightBoldDuotone;
export type { ArrowUpRightBoldDuotoneProps };
