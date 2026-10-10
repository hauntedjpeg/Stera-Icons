import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M4.93 4.93c3.9-3.9 10.24-3.9 14.14 0s3.9 10.24 0 14.14-10.24 3.9-14.14 0-3.9-10.24 0-14.14m12.73 1.41c-3.13-3.12-8.2-3.12-11.32 0s-3.12 8.2 0 11.32 8.2 3.12 11.32 0 3.12-8.2 0-11.32" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.17c.55 0 1 .45 1 1v5.66q0 .41-.3.7c-.18.2-.44.3-.7.3H9.17c-.55 0-1-.45-1-1s.45-1 1-1h3.24L8.46 9.88c-.39-.4-.39-1.02 0-1.42.4-.39 1.03-.39 1.42 0l3.95 3.95V9.17c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ArrowCircleDownRightBoldDuotone.displayName = 'ArrowCircleDownRightBoldDuotone';

// Triple export pattern
export { ArrowCircleDownRightBoldDuotone, ArrowCircleDownRightBoldDuotone as ArrowCircleDownRightBoldDuotoneIcon, ArrowCircleDownRightBoldDuotone as SiArrowCircleDownRightBoldDuotone };
export default ArrowCircleDownRightBoldDuotone;
export type { ArrowCircleDownRightBoldDuotoneProps };
