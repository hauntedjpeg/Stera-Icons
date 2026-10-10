import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpinnerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpinnerBoldDuotone = memo(
  forwardRef<SVGSVGElement, SpinnerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.83 15.75c.4-.39 1.03-.39 1.42 0 .39.4.39 1.02 0 1.41l-1.91 1.91c-.4.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41zM15.74 15.75c.4-.39 1.03-.39 1.42 0l1.9 1.91c.4.4.4 1.02 0 1.41-.38.4-1.02.4-1.4 0l-1.92-1.9c-.39-.4-.39-1.03 0-1.42M4.93 4.93c.39-.4 1.02-.4 1.41 0l1.9 1.9c.4.4.4 1.03 0 1.42-.38.4-1.01.4-1.4 0l-1.91-1.9c-.4-.4-.4-1.03 0-1.42M17.65 4.93c.4-.4 1.03-.4 1.42 0 .39.39.39 1.02 0 1.41l-1.91 1.91c-.4.4-1.03.4-1.42 0-.39-.39-.39-1.02 0-1.41z" opacity={0.4} />
        <path d="M12 17.3c.55 0 1 .45 1 1V21c0 .55-.45 1-1 1s-1-.45-1-1v-2.7c0-.55.45-1 1-1M5.7 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM21 11c.55 0 1 .45 1 1s-.45 1-1 1h-2.7c-.55 0-1-.45-1-1s.45-1 1-1zM12 2c.55 0 1 .45 1 1v2.7c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

SpinnerBoldDuotone.displayName = 'SpinnerBoldDuotone';

// Triple export pattern
export { SpinnerBoldDuotone, SpinnerBoldDuotone as SpinnerBoldDuotoneIcon, SpinnerBoldDuotone as SiSpinnerBoldDuotone };
export default SpinnerBoldDuotone;
export type { SpinnerBoldDuotoneProps };
