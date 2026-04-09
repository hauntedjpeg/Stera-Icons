import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 5c-.48 0-.87.39-.87.87v5.89l-2.51-2.5a.88.88 0 0 0-1.24 1.23l4 4a.9.9 0 0 0 1.24 0l4-4a.88.88 0 0 0-1.24-1.24l-2.5 2.5V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.13c.48 0 .87.39.87.87v5.89l2.51-2.5a.88.88 0 0 1 1.24 1.23l-4 4a.9.9 0 0 1-1.24 0l-4-4a.88.88 0 0 1 1.24-1.24l2.5 2.5V8c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ArrowCircleDownFillDuotone.displayName = 'ArrowCircleDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownFillDuotone, ArrowCircleDownFillDuotone as ArrowCircleDownFillDuotoneIcon, ArrowCircleDownFillDuotone as SiArrowCircleDownFillDuotone };
export default ArrowCircleDownFillDuotone;
export type { ArrowCircleDownFillDuotoneProps };
