import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 5c-.48 0-.87.39-.87.87v5.89l-2.51-2.5c-.34-.35-.9-.35-1.24 0-.34.33-.34.89 0 1.23l4 4q.26.24.62.25.36 0 .62-.25l4-4c.34-.34.34-.9 0-1.24s-.9-.34-1.24 0l-2.5 2.5V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.13c.48 0 .87.39.87.87v5.89l2.51-2.5c.34-.35.9-.35 1.24 0 .34.33.34.89 0 1.23l-4 4q-.27.24-.62.25-.36 0-.62-.25l-4-4c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l2.5 2.5V8c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ArrowCircleDownFillDuotone.displayName = 'ArrowCircleDownFillDuotone';

// Triple export pattern
export { ArrowCircleDownFillDuotone, ArrowCircleDownFillDuotone as ArrowCircleDownFillDuotoneIcon, ArrowCircleDownFillDuotone as SiArrowCircleDownFillDuotone };
export default ArrowCircleDownFillDuotone;
export type { ArrowCircleDownFillDuotoneProps };
