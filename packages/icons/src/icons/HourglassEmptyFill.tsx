import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HourglassEmptyFillProps = Omit<IconBaseProps, 'children'>;

const HourglassEmptyFill = memo(
  forwardRef<SVGSVGElement, HourglassEmptyFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.5 3.13c.48 0 .88.39.88.87s-.4.88-.88.88h-.62V6c0 .86 0 1.47-.16 2.04q-.23.72-.69 1.31c-.37.46-.87.8-1.58 1.3L13.53 12l1.92 1.35c.71.5 1.21.84 1.58 1.3q.46.59.69 1.31c.16.57.16 1.18.16 2.04v1.13h.62c.48 0 .88.39.88.87s-.4.88-.88.88h-13c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h.63V18c0-.86-.01-1.47.15-2.04q.22-.72.69-1.31c.27-.35.63-.63 1.08-.95l.5-.35L10.47 12l-1.92-1.35c-.71-.5-1.21-.84-1.58-1.3q-.46-.59-.69-1.31c-.16-.57-.16-1.18-.16-2.04V4.88H5.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM7.88 6c0 .97 0 1.28.08 1.54q.12.39.38.72c.17.22.42.4 1.2.96L12 10.93l2.45-1.71c.8-.56 1.04-.74 1.21-.96q.26-.32.38-.72c.08-.26.09-.57.09-1.54V4.88H7.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

HourglassEmptyFill.displayName = 'HourglassEmptyFill';

// Triple export pattern
export { HourglassEmptyFill, HourglassEmptyFill as HourglassEmptyFillIcon, HourglassEmptyFill as SiHourglassEmptyFill };
export default HourglassEmptyFill;
export type { HourglassEmptyFillProps };
