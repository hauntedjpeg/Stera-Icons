import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 3.13c.35 0 .67.2.8.54.14.32.07.7-.18.95L8.49 7.25l8.26 8.26 2.63-2.63c.25-.25.63-.32.96-.19.32.14.54.46.54.81V20c0 .48-.4.88-.88.88h-6.5c-.35 0-.67-.22-.8-.54-.14-.33-.07-.7.18-.96l2.63-2.63-8.26-8.26-2.63 2.63c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V4c0-.48.39-.87.87-.87z" />
    </IconBase>
  ))
);

ArrowUpLeftDownRightFill.displayName = 'ArrowUpLeftDownRightFill';

// Triple export pattern
export { ArrowUpLeftDownRightFill, ArrowUpLeftDownRightFill as ArrowUpLeftDownRightFillIcon, ArrowUpLeftDownRightFill as SiArrowUpLeftDownRightFill };
export default ArrowUpLeftDownRightFill;
export type { ArrowUpLeftDownRightFillProps };
