import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PilcrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PilcrowFillDuotone = memo(
  forwardRef<SVGSVGElement, PilcrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.13 4.88v8.25H10c-2.28 0-4.12-1.85-4.12-4.13S7.72 4.88 10 4.88z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3.13c.48 0 .88.39.88.87s-.4.88-.88.88h-1.12V20c0 .48-.4.88-.88.88s-.87-.4-.87-.88V4.88h-2.25V20c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-5.12H10c-3.24 0-5.87-2.64-5.87-5.88S6.76 3.13 10 3.13zm-9 1.75C7.72 4.88 5.88 6.72 5.88 9s1.84 4.13 4.12 4.13h2.13V4.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

PilcrowFillDuotone.displayName = 'PilcrowFillDuotone';

// Triple export pattern
export { PilcrowFillDuotone, PilcrowFillDuotone as PilcrowFillDuotoneIcon, PilcrowFillDuotone as SiPilcrowFillDuotone };
export default PilcrowFillDuotone;
export type { PilcrowFillDuotoneProps };
