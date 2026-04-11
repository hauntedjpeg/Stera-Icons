import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentFillDuotone = memo(
  forwardRef<SVGSVGElement, MoonCrescentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.4 4.72a9.86 9.86 0 0 0 10.1 12.14A8.1 8.1 0 0 1 3.89 12c0-3.2 1.84-5.95 4.51-7.28" opacity={.4} />
        <path fillRule="evenodd" d="M9.6 2.42a.88.88 0 0 1 1 1.21 8.13 8.13 0 0 0 9.37 11.25A.88.88 0 0 1 21 16.1 9.87 9.87 0 1 1 9.59 2.42m-1.2 2.3a8.12 8.12 0 1 0 10.1 12.14l-.5.02A9.88 9.88 0 0 1 8.4 4.72" clipRule="evenodd" />
    </IconBase>
  ))
);

MoonCrescentFillDuotone.displayName = 'MoonCrescentFillDuotone';

// Triple export pattern (lucide-react style)
export { MoonCrescentFillDuotone, MoonCrescentFillDuotone as MoonCrescentFillDuotoneIcon, MoonCrescentFillDuotone as SiMoonCrescentFillDuotone };
export default MoonCrescentFillDuotone;
export type { MoonCrescentFillDuotoneProps };
