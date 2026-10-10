import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BackslashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BackslashBoldDuotone = memo(
  forwardRef<SVGSVGElement, BackslashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.75 19.34c.37.42.32 1.05-.1 1.41-.4.37-1.04.32-1.4-.1l-7-8 1.5-1.3z" opacity={.4} />
        <path d="M4.34 3.25c.42-.37 1.05-.32 1.41.1l7 8-1.5 1.3-7-8c-.37-.4-.32-1.04.1-1.4" />
    </IconBase>
  ))
);

BackslashBoldDuotone.displayName = 'BackslashBoldDuotone';

// Triple export pattern
export { BackslashBoldDuotone, BackslashBoldDuotone as BackslashBoldDuotoneIcon, BackslashBoldDuotone as SiBackslashBoldDuotone };
export default BackslashBoldDuotone;
export type { BackslashBoldDuotoneProps };
