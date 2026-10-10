import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDotFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 7.5c-1.31 0-2.37 1.06-2.37 2.37s1.06 2.38 2.37 2.38 2.38-1.07 2.38-2.38S13.3 9.63 12 9.63" clipRule="evenodd" opacity={.4} />
        <path d="M12 9.63c1.31 0 2.38 1.06 2.38 2.37S13.3 14.38 12 14.38 9.63 13.3 9.63 12 10.69 9.63 12 9.63" />
    </IconBase>
  ))
);

CircleDotFillDuotone.displayName = 'CircleDotFillDuotone';

// Triple export pattern
export { CircleDotFillDuotone, CircleDotFillDuotone as CircleDotFillDuotoneIcon, CircleDotFillDuotone as SiCircleDotFillDuotone };
export default CircleDotFillDuotone;
export type { CircleDotFillDuotoneProps };
