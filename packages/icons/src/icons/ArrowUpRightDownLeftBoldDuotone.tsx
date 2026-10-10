import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightDownLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightDownLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightDownLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 5v1.41L6.41 19H5v-1.41L17.59 5z" opacity={.4} />
        <path d="M4 12.5c.55 0 1 .45 1 1V19h5.5c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1v-6.5c0-.55.45-1 1-1M20 3c.55 0 1 .45 1 1v6.5c0 .55-.45 1-1 1s-1-.45-1-1V5h-5.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ArrowUpRightDownLeftBoldDuotone.displayName = 'ArrowUpRightDownLeftBoldDuotone';

// Triple export pattern
export { ArrowUpRightDownLeftBoldDuotone, ArrowUpRightDownLeftBoldDuotone as ArrowUpRightDownLeftBoldDuotoneIcon, ArrowUpRightDownLeftBoldDuotone as SiArrowUpRightDownLeftBoldDuotone };
export default ArrowUpRightDownLeftBoldDuotone;
export type { ArrowUpRightDownLeftBoldDuotoneProps };
