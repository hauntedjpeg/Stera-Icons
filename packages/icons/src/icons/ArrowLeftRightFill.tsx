import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightFill = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.17 6.7c.32-.14.7-.07.95.18l4.5 4.5q.24.26.25.62 0 .31-.2.55l-.05.07-4.5 4.5c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-3.63H7.37v3.63c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-4.5-4.5-.06-.07c-.28-.34-.26-.85.06-1.17l4.5-4.5c.25-.25.63-.32.95-.19.33.14.54.46.54.81v3.62h9.25V7.5c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowLeftRightFill.displayName = 'ArrowLeftRightFill';

// Triple export pattern
export { ArrowLeftRightFill, ArrowLeftRightFill as ArrowLeftRightFillIcon, ArrowLeftRightFill as SiArrowLeftRightFill };
export default ArrowLeftRightFill;
export type { ArrowLeftRightFillProps };
