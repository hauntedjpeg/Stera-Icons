import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-left-down-right-fill-duotone" {...props}>
      <path d="m16.75 15.51-1.24 1.24-8.26-8.26 1.24-1.24z" opacity={.4} />
        <path d="M19.38 12.88a.88.88 0 0 1 1.5.62V20c0 .48-.4.88-.88.88h-6.5a.88.88 0 0 1-.62-1.5zM10.5 3.13a.88.88 0 0 1 .62 1.49l-6.5 6.5a.88.88 0 0 1-1.5-.62V4c0-.48.4-.87.88-.87z" />
    </IconBase>
  ))
);

ArrowUpLeftDownRightFillDuotone.displayName = 'ArrowUpLeftDownRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftDownRightFillDuotone, ArrowUpLeftDownRightFillDuotone as ArrowUpLeftDownRightFillDuotoneIcon, ArrowUpLeftDownRightFillDuotone as SiArrowUpLeftDownRightFillDuotone };
export default ArrowUpLeftDownRightFillDuotone;
export type { ArrowUpLeftDownRightFillDuotoneProps };
