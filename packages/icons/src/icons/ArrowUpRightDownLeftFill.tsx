import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowUpRightDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 3.13c.48 0 .88.39.88.87v6.5c0 .35-.22.67-.54.8-.33.14-.7.07-.96-.18l-2.63-2.63-8.26 8.26 2.63 2.63c.25.25.32.63.19.96-.14.32-.46.54-.81.54H4c-.48 0-.87-.4-.87-.88v-6.5c0-.35.2-.67.54-.8.32-.14.7-.07.95.18l2.63 2.63 8.26-8.26-2.63-2.63c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

ArrowUpRightDownLeftFill.displayName = 'ArrowUpRightDownLeftFill';

// Triple export pattern
export { ArrowUpRightDownLeftFill, ArrowUpRightDownLeftFill as ArrowUpRightDownLeftFillIcon, ArrowUpRightDownLeftFill as SiArrowUpRightDownLeftFill };
export default ArrowUpRightDownLeftFill;
export type { ArrowUpRightDownLeftFillProps };
