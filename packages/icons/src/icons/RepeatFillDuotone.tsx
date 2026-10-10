import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RepeatFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RepeatFillDuotone = memo(
  forwardRef<SVGSVGElement, RepeatFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 10.63c.48 0 .88.39.88.87V13c0 3.24-2.64 5.87-5.88 5.88H6.88V21c0 .35-.22.67-.55.8-.32.14-.7.07-.95-.18l-3-3q-.25-.27-.25-.62 0-.36.25-.62l3-3c.25-.25.63-.32.95-.19.33.14.54.46.54.81v2.13H16c2.28 0 4.12-1.85 4.13-4.13v-1.5c0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M17.67 2.2c.32-.14.7-.07.95.18l3 3q.24.26.25.62 0 .36-.25.62l-3 3c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81V6.87H8c-2.28 0-4.12 1.85-4.12 4.13v1.5c0 .48-.4.87-.88.87s-.87-.39-.87-.87V11c0-3.24 2.63-5.88 5.87-5.88h9.13V3c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

RepeatFillDuotone.displayName = 'RepeatFillDuotone';

// Triple export pattern
export { RepeatFillDuotone, RepeatFillDuotone as RepeatFillDuotoneIcon, RepeatFillDuotone as SiRepeatFillDuotone };
export default RepeatFillDuotone;
export type { RepeatFillDuotoneProps };
