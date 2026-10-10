import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HourglassFillProps = Omit<IconBaseProps, 'children'>;

const HourglassFill = memo(
  forwardRef<SVGSVGElement, HourglassFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.5 3.13c.48 0 .88.39.88.87s-.4.88-.88.88h-.62V6c0 .86 0 1.47-.16 2.04q-.23.72-.69 1.31c-.37.46-.87.8-1.58 1.3L13.53 12l1.92 1.35c.71.5 1.21.84 1.58 1.3q.46.59.69 1.31c.16.57.16 1.18.16 2.04v1.13h.62c.48 0 .88.39.88.87s-.4.88-.88.88h-13c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h.63V18c0-.86-.01-1.47.15-2.04q.22-.72.69-1.31c.27-.35.63-.63 1.08-.95l.5-.35L10.47 12l-1.92-1.35-.5-.35c-.45-.32-.8-.6-1.08-.95q-.46-.59-.69-1.31c-.16-.57-.16-1.18-.16-2.04V4.88H5.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

HourglassFill.displayName = 'HourglassFill';

// Triple export pattern
export { HourglassFill, HourglassFill as HourglassFillIcon, HourglassFill as SiHourglassFill };
export default HourglassFill;
export type { HourglassFillProps };
