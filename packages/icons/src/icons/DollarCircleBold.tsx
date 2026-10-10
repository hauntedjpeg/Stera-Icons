import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarCircleBoldProps = Omit<IconBaseProps, 'children'>;

const DollarCircleBold = memo(
  forwardRef<SVGSVGElement, DollarCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.75 5.25c.55 0 1 .45 1 1V7.5h1.75c.55 0 1 .45 1 1s-.45 1-1 1h-3.75c-.41 0-.75.34-.75.75s.34.75.75.75h3c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75h-.5v1.25c0 .55-.45 1-1 1s-1-.45-1-1V16.5H9c-.55 0-1-.45-1-1s.45-1 1-1h4.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3C9.23 13 8 11.77 8 10.25S9.23 7.5 10.75 7.5V6.25c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

DollarCircleBold.displayName = 'DollarCircleBold';

// Triple export pattern
export { DollarCircleBold, DollarCircleBold as DollarCircleBoldIcon, DollarCircleBold as SiDollarCircleBold };
export default DollarCircleBold;
export type { DollarCircleBoldProps };
