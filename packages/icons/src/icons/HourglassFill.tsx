import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HourglassFillProps = Omit<IconBaseProps, 'children'>;

const HourglassFill = memo(
  forwardRef<SVGSVGElement, HourglassFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.5 3.13a.88.88 0 0 1 0 1.75h-.62V6c0 .86 0 1.47-.16 2.04q-.23.72-.69 1.31c-.37.46-.87.8-1.58 1.3L13.53 12l1.92 1.35c.71.5 1.21.84 1.58 1.3q.46.59.69 1.31c.16.57.16 1.18.16 2.04v1.13h.62a.88.88 0 0 1 0 1.75h-13a.88.88 0 0 1 0-1.75h.63V18c0-.86-.01-1.47.15-2.04a4 4 0 0 1 1.77-2.26l.5-.35L10.47 12l-1.92-1.35-.5-.35a3.88 3.88 0 0 1-1.77-2.26c-.16-.57-.15-1.18-.15-2.04V4.88H5.5a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

HourglassFill.displayName = 'HourglassFill';

// Triple export pattern (lucide-react style)
export { HourglassFill, HourglassFill as HourglassFillIcon, HourglassFill as SiHourglassFill };
export default HourglassFill;
export type { HourglassFillProps };
