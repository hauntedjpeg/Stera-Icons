import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentFillProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentFill = memo(
  forwardRef<SVGSVGElement, MoonCrescentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.6 2.42a.88.88 0 0 1 1 1.21 8.13 8.13 0 0 0 9.37 11.25A.88.88 0 0 1 21 16.1 9.87 9.87 0 1 1 9.59 2.42" />
    </IconBase>
  ))
);

MoonCrescentFill.displayName = 'MoonCrescentFill';

// Triple export pattern (lucide-react style)
export { MoonCrescentFill, MoonCrescentFill as MoonCrescentFillIcon, MoonCrescentFill as SiMoonCrescentFill };
export default MoonCrescentFill;
export type { MoonCrescentFillProps };
