import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LampFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LampFillDuotone = memo(
  forwardRef<SVGSVGElement, LampFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 18.26c1.29.34 2.38 1.33 2.38 2.74 0 .48-.4.88-.88.88h-5c-.48 0-.87-.4-.87-.88 0-1.4 1.08-2.4 2.37-2.74v-4.39h2z" opacity={.4} />
        <path d="M13.15 2.13c1.46 0 2.8.82 3.46 2.14l3.09 6.17c.79 1.58-.36 3.43-2.13 3.44H6.43c-1.77 0-2.92-1.86-2.13-3.44L7.4 4.27c.66-1.32 2-2.14 3.46-2.14z" />
    </IconBase>
  ))
);

LampFillDuotone.displayName = 'LampFillDuotone';

// Triple export pattern
export { LampFillDuotone, LampFillDuotone as LampFillDuotoneIcon, LampFillDuotone as SiLampFillDuotone };
export default LampFillDuotone;
export type { LampFillDuotoneProps };
