import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DollarCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, DollarCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M11.75 5.25c.55 0 1 .45 1 1V7.5h1.75c.55 0 1 .45 1 1s-.45 1-1 1h-3.75c-.41 0-.75.34-.75.75s.34.75.75.75h3c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75h-.5v1.25c0 .55-.45 1-1 1s-1-.45-1-1V16.5H9c-.55 0-1-.45-1-1s.45-1 1-1h4.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3C9.23 13 8 11.77 8 10.25S9.23 7.5 10.75 7.5V6.25c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

DollarCircleBoldDuotone.displayName = 'DollarCircleBoldDuotone';

// Triple export pattern
export { DollarCircleBoldDuotone, DollarCircleBoldDuotone as DollarCircleBoldDuotoneIcon, DollarCircleBoldDuotone as SiDollarCircleBoldDuotone };
export default DollarCircleBoldDuotone;
export type { DollarCircleBoldDuotoneProps };
