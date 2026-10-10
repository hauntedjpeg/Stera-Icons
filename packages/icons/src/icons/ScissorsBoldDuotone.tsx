import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScissorsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScissorsBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScissorsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.02 13.37c.35-.43.98-.5 1.4-.15l6.2 5c.44.35.5.98.16 1.4-.35.44-.98.5-1.4.16l-6.2-5c-.44-.35-.5-.98-.16-1.4" opacity={0.4} />
        <path fillRule="evenodd" d="M5.5 3C7.43 3 9 4.57 9 6.5q-.01.71-.26 1.33l1.73 1.4c.43.34.5.97.15 1.4s-.98.5-1.4.15l-1.74-1.4Q6.62 10 5.5 10C3.57 10 2 8.43 2 6.5S3.57 3 5.5 3m0 2C4.67 5 4 5.67 4 6.5S4.67 8 5.5 8 7 7.33 7 6.5 6.33 5 5.5 5" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M20.37 4.22c.43-.34 1.06-.28 1.4.15.35.43.29 1.06-.14 1.4l-12.9 10.4Q9 16.8 9 17.5C9 19.43 7.43 21 5.5 21S2 19.43 2 17.5 3.57 14 5.5 14q1.12.02 1.98.62zM5.5 16c-.83 0-1.5.67-1.5 1.5S4.67 19 5.5 19 7 18.33 7 17.5 6.33 16 5.5 16" clipRule="evenodd" />
    </IconBase>
  ))
);

ScissorsBoldDuotone.displayName = 'ScissorsBoldDuotone';

// Triple export pattern
export { ScissorsBoldDuotone, ScissorsBoldDuotone as ScissorsBoldDuotoneIcon, ScissorsBoldDuotone as SiScissorsBoldDuotone };
export default ScissorsBoldDuotone;
export type { ScissorsBoldDuotoneProps };
