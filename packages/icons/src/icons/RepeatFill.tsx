import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RepeatFillProps = Omit<IconBaseProps, 'children'>;

const RepeatFill = memo(
  forwardRef<SVGSVGElement, RepeatFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="repeat-fill" {...props}>
      <path d="M21 10.62c.48 0 .87.4.88.88V13A5.9 5.9 0 0 1 16 18.87H6.88V21a.88.88 0 0 1-1.5.62l-3-3a.9.9 0 0 1 0-1.24l3-3a.88.88 0 0 1 1.5.62v2.12H16A4.13 4.13 0 0 0 20.13 13v-1.5c0-.48.39-.88.87-.88M17.67 2.2c.32-.14.7-.07.95.18l3 3a.9.9 0 0 1 0 1.24l-3 3a.88.88 0 0 1-1.5-.62V6.87H8A4.13 4.13 0 0 0 3.88 11v1.5a.87.87 0 1 1-1.75 0V11A5.9 5.9 0 0 1 8 5.12h9.13V3c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

RepeatFill.displayName = 'RepeatFill';

// Triple export pattern (lucide-react style)
export { RepeatFill, RepeatFill as RepeatFillIcon, RepeatFill as SiRepeatFill };
export default RepeatFill;
export type { RepeatFillProps };
