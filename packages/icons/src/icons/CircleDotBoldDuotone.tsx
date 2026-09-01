import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDotBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDotBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
    </IconBase>
  ))
);

CircleDotBoldDuotone.displayName = 'CircleDotBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleDotBoldDuotone, CircleDotBoldDuotone as CircleDotBoldDuotoneIcon, CircleDotBoldDuotone as SiCircleDotBoldDuotone };
export default CircleDotBoldDuotone;
export type { CircleDotBoldDuotoneProps };
