import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 11c.55 0 1 .45 1 1s-.45 1-1 1H7.41l-1-1 1-1z" opacity={.4} />
        <path d="M11.3 4.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L6.42 12l6.3 6.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-7-7c-.39-.38-.39-1.02 0-1.4z" />
    </IconBase>
  ))
);

ArrowLeftBoldDuotone.displayName = 'ArrowLeftBoldDuotone';

// Triple export pattern
export { ArrowLeftBoldDuotone, ArrowLeftBoldDuotone as ArrowLeftBoldDuotoneIcon, ArrowLeftBoldDuotone as SiArrowLeftBoldDuotone };
export default ArrowLeftBoldDuotone;
export type { ArrowLeftBoldDuotoneProps };
