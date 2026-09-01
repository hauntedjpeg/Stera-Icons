import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDotFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 7.5a2.37 2.37 0 1 0 0 4.74 2.37 2.37 0 0 0 0-4.74" clipRule="evenodd" opacity={.4} />
        <path d="M12 9.63a2.37 2.37 0 1 1 0 4.74 2.37 2.37 0 0 1 0-4.74" />
    </IconBase>
  ))
);

CircleDotFillDuotone.displayName = 'CircleDotFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleDotFillDuotone, CircleDotFillDuotone as CircleDotFillDuotoneIcon, CircleDotFillDuotone as SiCircleDotFillDuotone };
export default CircleDotFillDuotone;
export type { CircleDotFillDuotoneProps };
