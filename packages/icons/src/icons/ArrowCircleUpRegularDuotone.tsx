import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.25q.31 0 .53.22l4 4c.3.3.3.77 0 1.06s-.77.3-1.06 0l-2.72-2.72v6.2c0 .4-.34.74-.75.74s-.75-.34-.75-.75V9.81l-2.72 2.72c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4-4q.22-.22.53-.22" />
    </IconBase>
  ))
);

ArrowCircleUpRegularDuotone.displayName = 'ArrowCircleUpRegularDuotone';

// Triple export pattern
export { ArrowCircleUpRegularDuotone, ArrowCircleUpRegularDuotone as ArrowCircleUpRegularDuotoneIcon, ArrowCircleUpRegularDuotone as SiArrowCircleUpRegularDuotone };
export default ArrowCircleUpRegularDuotone;
export type { ArrowCircleUpRegularDuotoneProps };
