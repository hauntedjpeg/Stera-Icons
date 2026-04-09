import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsLeftRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightFill = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrows-left-right-fill" {...props}>
      <path d="M5.88 12.88a.88.88 0 0 1 1.5.62v3.12H20.5a.88.88 0 0 1 0 1.75H7.38v3.13a.88.88 0 0 1-1.5.62l-4-4a1 1 0 0 1-.23-.41v-.02l-.02-.13v-.18l.04-.15v-.01a1 1 0 0 1 .15-.27l.06-.07zM17.17 2.7c.32-.14.7-.07.95.18l4 4 .05.06.09.12v.01q.07.12.1.27v.03a1 1 0 0 1 0 .3 1 1 0 0 1-.24.45l-4 4a.88.88 0 0 1-1.5-.62V8.37H3.5a.87.87 0 1 1 0-1.75h13.13V3.5c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

ArrowsLeftRightFill.displayName = 'ArrowsLeftRightFill';

// Triple export pattern (lucide-react style)
export { ArrowsLeftRightFill, ArrowsLeftRightFill as ArrowsLeftRightFillIcon, ArrowsLeftRightFill as SiArrowsLeftRightFill };
export default ArrowsLeftRightFill;
export type { ArrowsLeftRightFillProps };
