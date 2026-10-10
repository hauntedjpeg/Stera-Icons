import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m16.75 15.51-1.24 1.24-8.26-8.26 1.24-1.24z" opacity={.4} />
        <path d="M19.38 12.88c.25-.25.63-.32.96-.19.32.14.54.46.54.81V20c0 .48-.4.88-.88.88h-6.5c-.35 0-.67-.22-.8-.54-.14-.33-.07-.7.18-.96zM10.5 3.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-6.5 6.5c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V4c0-.48.39-.87.87-.87z" />
    </IconBase>
  ))
);

ArrowUpLeftDownRightFillDuotone.displayName = 'ArrowUpLeftDownRightFillDuotone';

// Triple export pattern
export { ArrowUpLeftDownRightFillDuotone, ArrowUpLeftDownRightFillDuotone as ArrowUpLeftDownRightFillDuotoneIcon, ArrowUpLeftDownRightFillDuotone as SiArrowUpLeftDownRightFillDuotone };
export default ArrowUpLeftDownRightFillDuotone;
export type { ArrowUpLeftDownRightFillDuotoneProps };
