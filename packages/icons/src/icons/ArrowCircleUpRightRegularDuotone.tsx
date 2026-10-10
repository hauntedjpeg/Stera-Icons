import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.1 5.1c3.81-3.8 9.99-3.8 13.8 0 3.8 3.81 3.8 9.99 0 13.8-3.81 3.8-9.99 3.8-13.8 0-3.8-3.81-3.8-9.99 0-13.8m12.73 1.07c-3.22-3.23-8.44-3.23-11.66 0s-3.23 8.44 0 11.66 8.44 3.23 11.66 0 3.23-8.44 0-11.66" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.42q.31 0 .53.22.21.22.22.53v5.66c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75v-3.85L9.7 15.36c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4.38-4.38H9.17c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ArrowCircleUpRightRegularDuotone.displayName = 'ArrowCircleUpRightRegularDuotone';

// Triple export pattern
export { ArrowCircleUpRightRegularDuotone, ArrowCircleUpRightRegularDuotone as ArrowCircleUpRightRegularDuotoneIcon, ArrowCircleUpRightRegularDuotone as SiArrowCircleUpRightRegularDuotone };
export default ArrowCircleUpRightRegularDuotone;
export type { ArrowCircleUpRightRegularDuotoneProps };
