import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m16.75 8.49-8.26 8.26-1.24-1.24 8.26-8.26z" opacity={.4} />
        <path d="M3.67 12.7c.32-.14.7-.07.95.18l6.5 6.5c.25.25.32.63.19.96-.14.32-.46.54-.81.54H4c-.48 0-.87-.4-.87-.88v-6.5c0-.35.2-.67.54-.8M20 3.13c.48 0 .88.39.88.87v6.5c0 .35-.22.67-.54.8-.33.14-.7.07-.96-.18l-6.5-6.5c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

ArrowUpRightDownLeftFillDuotone.displayName = 'ArrowUpRightDownLeftFillDuotone';

// Triple export pattern
export { ArrowUpRightDownLeftFillDuotone, ArrowUpRightDownLeftFillDuotone as ArrowUpRightDownLeftFillDuotoneIcon, ArrowUpRightDownLeftFillDuotone as SiArrowUpRightDownLeftFillDuotone };
export default ArrowUpRightDownLeftFillDuotone;
export type { ArrowUpRightDownLeftFillDuotoneProps };
