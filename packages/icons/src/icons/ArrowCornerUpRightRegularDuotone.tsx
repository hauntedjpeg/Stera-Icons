import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m18.94 11-.75.75H11c-1.92 0-2.7 0-3.31.2-1.3.43-2.31 1.44-2.73 2.74-.2.6-.21 1.39-.21 3.31 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.8 0-2.88.28-3.78.57-1.75 1.94-3.12 3.7-3.69.89-.29 1.97-.28 3.77-.28h7.19z" opacity={.4} />
        <path d="M14.47 5.47c.3-.3.77-.3 1.06 0l5 5 .1.11q.12.2.12.42 0 .31-.22.53l-5 5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L18.94 11l-4.47-4.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowCornerUpRightRegularDuotone.displayName = 'ArrowCornerUpRightRegularDuotone';

// Triple export pattern
export { ArrowCornerUpRightRegularDuotone, ArrowCornerUpRightRegularDuotone as ArrowCornerUpRightRegularDuotoneIcon, ArrowCornerUpRightRegularDuotone as SiArrowCornerUpRightRegularDuotone };
export default ArrowCornerUpRightRegularDuotone;
export type { ArrowCornerUpRightRegularDuotoneProps };
