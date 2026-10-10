import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M11.47 7.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-2.72 2.72H16c.41 0 .75.34.75.75s-.34.75-.75.75H9.81l2.72 2.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4-4q-.21-.22-.22-.53 0-.31.22-.53z" />
    </IconBase>
  ))
);

ArrowCircleLeftRegularDuotone.displayName = 'ArrowCircleLeftRegularDuotone';

// Triple export pattern
export { ArrowCircleLeftRegularDuotone, ArrowCircleLeftRegularDuotone as ArrowCircleLeftRegularDuotoneIcon, ArrowCircleLeftRegularDuotone as SiArrowCircleLeftRegularDuotone };
export default ArrowCircleLeftRegularDuotone;
export type { ArrowCircleLeftRegularDuotoneProps };
